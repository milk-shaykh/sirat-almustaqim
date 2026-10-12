from pathlib import Path

from flask import Blueprint, render_template, send_from_directory

root = Blueprint(
    "root",
    __name__,
    template_folder="ui/templates",
    static_folder="ui/static",
    static_url_path="/root-static"
)


@root.get("/assets/<path:filename>")
def assets(filename):
    asset_dir = Path(__file__).resolve().parents[1] / "assets"
    return send_from_directory(asset_dir, filename)


@root.route("/")
def home():
    return render_template("root.html")
