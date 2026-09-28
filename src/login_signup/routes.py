from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from db.database import db, User

login_signup = Blueprint('login_signup', __name__)

@login_signup.route('/login', methods=['GET', 'POST'])
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