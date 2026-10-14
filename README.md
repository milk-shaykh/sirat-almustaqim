# sirat-almustaqim

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