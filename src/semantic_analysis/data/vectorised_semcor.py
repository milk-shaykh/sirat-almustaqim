import nltk
from nltk.corpus import semcor
import sqlite3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from src.semantic_analysis.utils.text_prep import remove_stopword
from string import punctuation


nltk.download('semcor')

def vectorise_semcor(app):

	app = Flask(__name__)
	db = SQLAlchemy()
	db.init_app(app)
	app.config()

	class vectors(db.Model):
		id = db.Column(db.Integer, primary_key=True)
		vector = db.Column(db.LargeBinary, nullable=False)

	class synsets(db.Model):
		synset = db.Column(db.String(40), )


	sentances = semcor.tagged_sents(tag='sem')
	for sentance in sentances:
		cleaned_words = []
		keys = set()
		for word in sentance.subtrees():
			if word:
				if isinstance(word, str):
					cleaned_words.append(word)
				else:
					leaves = word.leaves()
					cleaned_words.append(" ".join(leaves))
					label = word.label()
					if isinstance(label, nltk.Lemma):
						keys.add(label.synset().name())
		for key in keys:
			return """considering life choices"""


if __name__ == "__main__":
	vectorise_semcor()


