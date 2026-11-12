# sirat-almustaqim

sirat-almustaqim (sirat-almustaqim.vercel.app) is a project aimed at bringing ahadith to english speakers.
The project uses semantic analysis and the shamela db to provide cross-collection comparison, theme extraction, etc. without compromise on authenticity.

if a venv isnt present, run from /sirat-almustaqim:
```sh
python -m venv venv
source venv/bin/activate
```

once a venv exists run this to provide debug interface:
```sh
pip install -r requirements.txt
flask --app app run --debug
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