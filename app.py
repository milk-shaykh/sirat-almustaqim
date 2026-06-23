from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def wassup():
  return render_template("index.html")

@app.route('/test')
def wassup():
  return render_template("test.html")
