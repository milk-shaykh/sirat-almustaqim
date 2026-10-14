from flask import Blueprint, render_template

main = Blueprint("main",
    __name__,
    template_folder="ui/templates",
    static_folder="ui/static",
    static_url_path="/main-static",
)

@main.route("/profile")
def profile():
	return render_template('profile.html')