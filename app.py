from flask import flask

app = flask(__name__)

@app.route('/')
def wassup():
  return "<p>NEA</p>"

@app.route('/test')
def wassup():
  return "<p>test</p>"
