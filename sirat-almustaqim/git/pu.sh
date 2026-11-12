#!/usr/bin/env bash
set -euo pipefail

fail() {
    printf 'Error: %s\n' "$1" >&2
    exit 1
}

fail_if_ignored_staged() {
    mapfile -d '' staged_paths < <(git diff --cached --name-only -z)
    for path in "${staged_paths[@]}"; do
        if git check-ignore --no-index --quiet -- "$path"; then
            fail "Ignored path is staged: $path"
        fi
    done
}

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" || fail "Run this script from inside the Git repository."
cd "$repo_root"

branch="$(git symbolic-ref --quiet --short HEAD)" || fail "Checkout a branch before pushing."
commit_message="${*:-Update project files}"
git remote get-url origin >/dev/null 2>&1 || fail "No Git remote named origin is configured."
git lfs version >/dev/null 2>&1 || fail "Git LFS is required. Install it and try again."

git lfs install
fail_if_ignored_staged
mapfile -d '' ignored_paths < <(git ls-files -ci --exclude-standard -z)
git add --all -- . ':(exclude).env'

if ((${#ignored_paths[@]})); then
    ignored_pathspecs=()
    for path in "${ignored_paths[@]}"; do
        ignored_pathspecs+=(":(top,literal)$path")
    done
    git reset -q HEAD -- "${ignored_pathspecs[@]}"
fi

fail_if_ignored_staged

if ! git diff --cached --quiet; then
    git commit -m "$commit_message"
fi

# Convert this repository's 113 MB database in unpublished commits to LFS.
git lfs migrate import --include="db/S2.db"

git push origin "$branch"