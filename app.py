from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
import click
from werkzeug.security import generate_password_hash, check_password_hash
from src.main.routes import main

app = Flask(__name__)
app.config["SECRET_KEY"] = "temp"
app.config["SQLALCHEMY_DATABASE_URI"]

app.register_blueprint(main)