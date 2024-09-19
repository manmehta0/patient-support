"""
openai_service.py: Contains functions for interacting with the OpenAI API.
"""

import openai
import os

# Set OpenAI API key from environment variables
openai.api_key = os.environ['OPEN_API_KEY']


def generate_chat_response(prompt):
    """
    Generate a chatbot response from OpenAI's GPT model based on the provided prompt.
    """
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        message = response.choices[0].message.content
        return {"response": message}
    except Exception as e:
        print(f"Error: {e}")
        return {"response": "Sorry, something went wrong."}
