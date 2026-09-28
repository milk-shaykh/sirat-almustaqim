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

if __name__ == "__main__":
	print(word_tokenize("hello how are you"))
	print(sent_tokenize("hello how are you"))






	


# ✨ 'Abdur-Rahman bin Abu Bakr (May Allah be pleased with them) reported: The Companions of As-Suffah were poor people. 
# The Prophet (ﷺ) said, "Whoever has food enough for two people, should take a third one (from among them), and whoever has 
# food enough for four persons, should take a fifth or sixth (or said something similar)." Abu Bakr (May Allah be pleased 
# with him) took three people with him while Messenger of Allah (ﷺ) took ten. Abu Bakr (May Allah be pleased with him) 
# took his supper with the Prophet (ﷺ) and stayed there till he offered the 'Isha' prayers. After a part of the night 
# had passed, he returned to his house. His wife said to him: "What has detained you from your guests?" He said: 
# "Have you not served supper to them?" She said: "They refused to take supper until you come." [Abdur-Rahman (Abu Bakr's son)
#  or the servants] presented the meal to them but they refused to eat. I (the narrator) hid myself out of fear. 
# Abu Bakr (May Allah be pleased with him) (my father) rebuked me. Then he said to them: "Please eat. By Allah! 
# I will never eat the meal." 'Abdur-Rahman added: Whenever we took a morsel of the meal, the meal grew from 
# underneath more than that morsel we had till everybody ate to his satisfaction; yet the remaining food was 
# more than what was in the beginning. On seeing this, Abu Bakr (May Allah be pleased with him) called his wife 
# and said: "O sister of Banu Firas! What is this?" She said: "O pleasure of my eyes! The food has increased 
# thrice in quantity." Then Abu Bakr (May Allah be pleased with him) started eating. He said: "My oath not to 
# take the meal was because of Satan." He took a morsel handful from it and carried the rest to the Prophet (ﷺ). 
# That food remained with him. In those days there was a treaty between us and the pagans and when the period of that 
# treaty elapsed, he (ﷺ) divided us into twelve groups and every group was headed by a man. Allah knows how many men 
# were under the command of each leader. Anyhow, all of them ate of that meal.<br/><br/><b>[Al-Bukhari and Muslim]</b>.
# <br/><br/>There are some more narrations in both Al-Bukhari and Muslim with very minor differences in wordings 
# and in details.<br/><br/>