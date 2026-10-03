from flask import Blueprint, render_template

main = Blueprint("main", __name__)

@main.route("/main")
def main():
	return render_template('src/main/ui/templates/profile.html')