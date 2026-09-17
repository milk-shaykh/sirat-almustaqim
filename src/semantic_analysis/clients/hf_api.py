import requests
import os
from dotenv import load_dotenv

load_dotenv()

HF_API_TOKEN = os.getenv("HF_API_TOKEN")

headers = {"Authorization": f"Bearer {HF_API_TOKEN}"}

