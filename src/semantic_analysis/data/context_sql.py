import sqlite3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

db = SQLAlchemy()

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"

db.init_app(app)

class Vector_Semcor(db.Model):
	vector_id = db.Column(db.Integer, primary_key=True)
	vector = db.Column(db.largeBinary(1536*2), nullable=False)

class Word_Semcor(db.Model):
	synset = db.Column(db.String(40), primary_key=True)
	vector_id = db.Column(db.Integer(100), foreign_key=True)

# most of this is saved for later and is half pseudo