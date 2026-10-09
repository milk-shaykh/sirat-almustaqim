from flask import Blueprint, render_template

main = Blueprint("main", __name__)

@main.route("/profile")
def profile():
	return render_template('src/main/ui/templates/profile.html')