from ..clients import hf_api
import time

def coprox(vector1: list[float], vector2: list[float]) -> float:
	ln = len(vector1)
	dot_product == 0
	sq_mag = 0
	for i in range(ln):
		sq_mag1 += vector1[i]**2
		sq_mag2 += vector2[i]**2
		dot_product += vector1[i] * vector2[i]
	sq_mag = sq_mag1 ** sq_mag2
	return dot_product / (sq_mag) ** 0.5

def sum_vectors(vectors: list[list[float]]) -> list[float]:
	vector_len = len(vectors[0])
	summated_vector = []
	for i in range(len(vectors)):
		for j in range(vector_len):
			element += vectors[i][j]
		summated_vector.append(element)
	return summated_vector

#/usr/local/python/3.14.2/bin/python
#Python 3.14.2 (main, Aug 27 2026, 12:34:32) [GCC 13.3.0] on linux
#Type "help", "copyright", "credits" or "license" for more information.
#Ctrl click to launch VS Code Native REPL

def word_vectorise(text: list[tuple[str, str]]):
	for _ in range(5):
		for _ in range(10):
			try:
				return hf_api.word_vectorise(text)
			except Exception:
				time.sleep(0.1)
		time.sleep(0.5)
	raise Exception("ERROR. HF_API REFUSED TO SEND VECTOR.")

# ✨ Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) put me in charge of charity of Ramadan 
# (Sadaqat-ul- Fitr). Somebody came to me and began to take away some food-stuff. I caught him and said, "I must take you to 
# the Messenger of Allah (ﷺ)." He said, "I am a needy man with a large family, and so I have a pressing need." I let him go. 
# When I saw the Messenger of Allah (ﷺ) next morning, he asked me, "O Abu Hurairah! What did your captive do last night?" 
# I said, "O Messenger of Allah! He complained of a pressing need and a big family. I felt pity for him so I let him go."
#  He (ﷺ) said, "He told you a lie and he will return." I was sure, according to the saying of the Messenger of Allah (ﷺ) 
# that he would return. I waited for him. He sneaked up again and began to steal food-stuff from the Sadaqah. I caught him and 
# said; "I must take you to the Messenger of Allah (ﷺ)." He said, "Let go of me, I am a needy man. I have to bear the expenses 
# of a big family. I will not come back." So I took pity on him and let him go. I went at dawn to the Messenger of Allah (ﷺ) 
# who asked me, "O Abu Hurairah! What did your captive do last night?" I replied, "O Messenger of Allah! He complained of a 
# pressing want and the burden of a big family. I took pity on him and so I let him go." He (ﷺ) said, "He told you a lie and 
# he will return." (That man) came again to steal the food-stuff. I arrested him and said, "I must take you to the 
# Messenger of Allah (ﷺ), and this is the last of three times. You promised that you would not come again but you did." 
# He said, "Let go of me, I shall teach you some words with which Allah may benefit you." I asked, "What are those words?" 
# He replied, "When you go to bed, recite Ayat-ul- Kursi (2:255) for there will be a guardian appointed over you from Allah,
# and Satan will not be able to approach you till morning." So I let him go. Next morning the Messenger of Allah (ﷺ) asked me, 
# "What did your prisoner do last night." I answered, "He promised to teach me some words which he claimed will benefit me 
# before Allah. So I let him go." The Messenger of Allah (ﷺ) asked, "What are those words that he taught you?" I said, "He told 
# me: 'When you go to bed, recite Ayat- ul-Kursi from the beginning to the end i.e.,<b>[ Allah! none has the right to be
# worshipped but He, the Ever Living, the One Who sustains and protects all that exists. Neither slumber nor sleep overtakes 
# Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except
# with His Permission? He knows what happens to them (His creatures) in this world, and what will happen to them in the Hereafter.
# And they will never compass anything of His Knowledge except that which He wills. His Kursi encompasses the heavens and the 
# earth, and preserving them does not fatigue Him. And He is the Most High, the Most Great]</b>.' (2:255). He added: 
# 'By reciting it, there will be a guardian appointed over you from Allah who will protect you during the night, and Satan
# will not be able to come near you until morning'." The Messenger of Allah (ﷺ) said, "Verily, he has told you the truth 
# though he is a liar. O Abu Hurairah! Do you know with whom you were speaking for the last three nights?" I said, "No." He (ﷺ) 
# said, "He was Shaitan (Satan)."<br/><br/><b>[Al-Bukhari]</b>.<br/><br/>