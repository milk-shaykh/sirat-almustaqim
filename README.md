# sirat-almustaqim

sirat-almustaqim (sirat-almustaqim.vercel.app) is a project aimed at bringing ahadith to english speakers.
The project uses semantic analysis and the shamela db to provide cross-collection comparison, theme extraction, etc. without compromise on authenticity.

if a venv isnt present, run from directory that sirat-almustaqim starts from::
```sh
python -m venv venv
source venv/bin/activate
```

once a venv exists run this to provide debug interface:
```sh
pip install -r requirements.txt
flask --app app run --debug
```

## making replit work
if pushing and pulling stops working run:
```sh
rm -f ~/.git-credentials
git remote set-url origin "https://milk-sheikh:PERSONAL_ACCESS_TOKEN_REPLIT@github.com/milk-shaykh/sirat-almustaqim"
```
to remove current credentials then restart with personal access token for github.

if nothings working as intended then just do this each time as a last resort:
```sh
GIT_CONFIG_NOSYSTEM=1 git push "https://milk-sheikh:PERSONAL_ACCESS_TOKEN_REPLITithub.com/milk-shaykh/sirat-almustaqim" main
```

## Migrating SQLite Databases to Supabase (`sirat-almustaqim`)

Migrating your SQLite databases (such as the Shamela database and `S2.db`) to **Supabase** moves your data into a hosted PostgreSQL database, simplifying Vercel deployments and scaling semantic search.

---

### 1. Set Up Your Supabase Project & Vector Support

- **Create a Project:** Start a new project on [Supabase](https://supabase.com) and copy your **PostgreSQL Connection String (URI)** from **Project Settings > Database**.
- **Enable `pgvector` (For Semantic Analysis):** Under **Database > Extensions**, search for and enable the **`vector`** extension so you can store and query embeddings directly in PostgreSQL.

---

### 2. Convert & Migrate Your SQLite Data

SQLite and PostgreSQL use slightly different data types (e.g., `INTEGER PRIMARY KEY AUTOINCREMENT` vs. `SERIAL` or `IDENTITY`, and `BLOB` vs. `BYTEA` or `VECTOR`). Choose one of the following methods to transfer your schema and rows:

#### Option A: Automated Migration with `pgloader` (Fastest)
Install and run `pgloader` to automatically convert your SQLite schema, indexes, and rows into your Supabase PostgreSQL database in a single command:

```bash
pgloader sqlite:///path/to/your/database.db postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT.supabase.co:5432/postgres
```

#### Option B: Custom Python Script
If your tables contain custom structures or vector embeddings that need transformation during migration:
1. Read rows locally using Python's built-in `sqlite3` module.
2. Batch-insert the records into Supabase using `psycopg` (`psycopg2`) or `SQLAlchemy`.

---

### 3. Update Your Flask App (`app.py`)

- **Swap Database Drivers:** Replace `sqlite3` imports and connections in `app.py` with a PostgreSQL driver such as **`psycopg[binary]`**, **`SQLAlchemy`**, or the official **`supabase`** Python client, and add it to `requirements.txt`.
- **Use Environment Variables:** Store your Supabase connection URI as `DATABASE_URL` in **Replit Secrets** and **Vercel Environment Variables** rather than hardcoding credentials in your repository.
- **Adjust SQL Syntax:** Update any SQLite-specific syntax in your queries (for example, replacing `?` parameter placeholders with `%s` for `psycopg`).

---

### 4. Clean Up Your Git Repository

Once your data is verified in Supabase:

1. Remove the large `.db` files from Git tracking without deleting them locally:
   ```bash
   git rm --cached db/*.db
   ```
2. Add `*.db` to your `.gitignore` file so future database files stay out of Git and Vercel builds remain lightweight.
3. Commit and push the cleanup:
   ```bash
   git add .gitignore
   git commit -m "Remove SQLite databases after Supabase migration"
   git push
   ```










## Electric logo

Build the browser bundle after installing the Node dependencies:

```sh
npm install
npm run build:electric-logo
```

Add the PNG under `src/assets/images/`, then import the macro in any Jinja template:

```jinja
{% from "components/electric_logo.html" import electric_logo %}

{{ electric_logo(url_for('root.assets', filename='images/logo.png')) }}
```

The macro defaults to a 480px-high effect. Override its settings as needed, for example `electric_logo(image_url, height='320px', color='#9DC48E', glow=2)`.