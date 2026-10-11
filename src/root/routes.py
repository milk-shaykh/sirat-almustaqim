from flask import Blueprint, render_template


root = Blueprint(
    "root",
    __name__,
    template_folder="ui/templates",
    static_folder="ui/static",
    static_url_path="/root-static",
)


@root.route("/")
def home():
    return render_template("root.html")