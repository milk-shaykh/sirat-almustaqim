from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
import click
from werkzeug.security import generate_password_hash, check_password_hash
from src.main.routes import main
from src.root.routes import root
from src.login_signup.routes import login_signup

app = Flask(
    __name__,
    template_folder="global/templates",
    static_folder="global/static",
    static_url_path="/global-static",
)
app.config["SECRET_KEY"] = "temp"

app.register_blueprint(main)
app.register_blueprint(root)
app.register_blueprint(login_signup)