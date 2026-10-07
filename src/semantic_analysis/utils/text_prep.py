import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem import WordNetLemmatizer
from nltk import pos_tag
from nltk.corpus import stopwords, wordnet
nltk.download('punkt_tab')
nltk.download('averaged_perceptron_tagger')
nltk.download('stopwords')

stopwords_eng = set(stopwords.words('english'))
lemmatiser = WordNetLemmatizer

def pos_tokenise_sentance(text: str) -> list[tuple[str, str]]:
	return pos_tag(word_tokenize(text))

def pos_tokenise(text: str) -> list[list[tuple[str, str]]]:
	sentance_tokens = sent_tokenize(text)
	return pos_tag(sentance_tokens)

def remove_stopwords(tokens: list[tuple[str, str]]) -> list[list[str, str]]:
	filtered_tokens = []
	for token in tokens:
		if not token[0] in stopwords_eng:
			filtered_tokens.append(token)
	return filtered_tokens

def get_wn_tag(tag):
	if tag:
		if tag[0] == "N":
			return wordnet.NOUN
		if tag[0] == "V":
			return wordnet.VERB
		if tag[0] == "J":
			return wordnet.ADJ
		if tag[0] == "R":
			return wordnet.ADV
		else:
			return wordnet.NOUN

def lemmatise(token: tuple[str, str]) -> tuple[str, str]:
	return (lemmatiser.lemmatizer(token[0]), token[1])

def pos_to_wn(tokens: list[tuple[str, str]]) -> list[tuple[str, str]]:
	return [(token[0], get_wn_tag(token[1])) for token in tokens]

def remove_stopword(token: tuple[str, str]) -> tuple[str, str]:
	if token[0] in stopwords_eng:
		return (None, None)
	return token

def is_stopword(word: str) -> bool:
	if word in stopwords_eng:
		return True
	return False

if __name__ == "__main__":
	print(word_tokenize("hello how are you"))
	print(sent_tokenize("hello how are you"))