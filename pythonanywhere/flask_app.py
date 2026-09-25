from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
import click
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

app = Flask(__name__)
app.config["SECRET_KEY"] = "temporary"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"

db.init_app(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

@app.cli.command("init-db")
def init_db():
    """Create all tables. Safe to run repeatedly."""
    db.create_all()
    click.echo("database initialised.")

@app.cli.command("reset-db")
def reset_db():
    """Drop everything + start over. destroys all data"""
    db.drop_all()
    db.create_all()
    click.echo("database reset")


@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"].strip()
        email = request.form["email"].strip().lower()
        password = request.form["password"]

        if not (username and password and email):
            flash("all fields are required.")
            return redirect(url_for("register")) #register is name of function

        user = User(username=username, email=email)
        user.set_password(password)

        try:
            db.session.add(user)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            flash("That username or email is already taken")
            return redirect(url_for("register"))

        flash("Account created. Please login.")
        return redirect(url_for("login"))
    return render_template('register.html')

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"].strip()
        password = request.form["password"]

        stmt = db.select(User).where(User.username == username)
        user = db.session.scalar(stmt)

        if user is None or not user.check_password(password):
            flash("invalid username or password")
            return redirect(url_for("login"))

        session.clear()
        session["user_id"] = user.id
        return redirect(url_for("profile"))

    return render_template("login.html")

@app.route("/profile")
def profile():
    user_id = session.get("user_id") # is like session["user_id"]
    if user_id is None:
        return redirect(url_for("login"))

    user = db.session.get(User, user_id) # quick way to get database entry
    return render_template("profile.html", user=user)

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("profile"))