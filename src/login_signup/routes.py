from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from db.database import db, User
from sqlalchemy.exc import IntegrityError

login_signup = Blueprint(
    "login_signup",
    __name__,
    template_folder="ui/templates",
    static_folder="ui/static",
    static_url_path="/login-signup-static",
)

@login_signup.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        username = request.form["username"].strip()
        password = request.form["password"]

        stmt = db.select(User).where(User.username == username)
        user = db.session.scalar(stmt)

        if user is None or not user.check_password(password):
            flash("invalid username or password")
            return redirect(url_for("login_signup.login"))

        session.clear()
        session["user_id"] = user.id
        return redirect(url_for("main.profile"))
    return render_template("login.html")

@login_signup.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form["username"].strip()
        email = request.form["email"].strip().lower()
        password = request.form["password"]

        if not (username and password and email):
            flash("all fields are required.")
            return redirect(url_for("login_signup.signup"))

        user = User(username=username, email=email)
        user.set_password(password)

        try:
            db.session.add(user)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            flash("That username or email is already taken")
            return redirect(url_for("login_signup.signup"))

        flash("Account created. Please login.")
        return redirect(url_for("login_signup.login"))
    return render_template('signup.html')
