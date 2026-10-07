#!/usr/bin/env bash
set -euo pipefail

fail() {
    printf 'Error: %s\n' "$1" >&2
    exit 1
}

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" || fail "Run this script from inside the Git repository."
cd "$repo_root"

branch="$(git symbolic-ref --quiet --short HEAD)" || fail "Checkout a branch before pushing."
git remote get-url origin >/dev/null 2>&1 || fail "No Git remote named origin is configured."
git lfs version >/dev/null 2>&1 || fail "Git LFS is required. Install it and try again."

if ! git diff --quiet -- .env || ! git diff --cached --quiet -- .env; then
    fail ".env has local changes. Commit or discard them separately; this script will not stage it."
fi

git lfs install
git add --all -- . ':(exclude).env'

if ! git diff --cached --quiet; then
    git commit -m "${1:-Update project files}"
fi

# Convert this repository's 113 MB database in unpublished commits to LFS.
git lfs migrate import --include="db/S2.db"

git push origin "$branch"