from flask import Blueprint, render_template, session, redirect, url_for
from db.database import db, User

main = Blueprint("main",
    __name__,
    template_folder="ui/templates",
    static_folder="ui/static",
    static_url_path="/main-static",
)

@main.route("/profile")
def profile():
    user_id = session.get("user_id") # is like session["user_id"]
    if user_id is None:
        return redirect(url_for("login"))

    user = db.session.get(User, user_id) # quick way to get database entry
    return render_template("profile.html", user=user)

@main.route('/signout')
def signout():
    session.clear()
    return redirect(url_for("root.home"))