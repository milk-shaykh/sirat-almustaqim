import nltk
from nltk import word_tokenize, sent_tokenize
nltk.download('punkt_tab')

def pos_tokenise(text: str) -> list[tuple[str, str]]:
	

if __name__ == "__main__":
	print(word_tokenize("hello how are you"))
	print(sent_tokenize("hello how are you"))