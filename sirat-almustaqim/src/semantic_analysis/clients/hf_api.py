import requests
import os
from dotenv import load_dotenv

load_dotenv()

HF_API_TOKEN = os.getenv("HF_API_TOKEN")
headers = {"Authorization": f"Bearer {HF_API_TOKEN}"}

URL = "https://api-inference.huggingface.co/models/microsoft/mpnet-base"

def word_vectorise(text: str) -> list[list[int]]:
	payload = {
		"inputs": text,
		"options": {
			"wait_for_model": True
		}
	}
	response = requests.post(URL, json=payload)
	if response.status_code != 200:
		print(F"ERROR. {response.response.text}")
		raise Exception(f"HF_API ERROR: {response.text}")

	vector = response.json()
	if not vector:
		print("ERROR. NO VECTOR RETURNED.")
		raise Exception("NO VECTOR RETURNED.")
	return vector