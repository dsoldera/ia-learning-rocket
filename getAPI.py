from openai import OpenAI
import os

os.environ['OPENAI_API_KEY'] = "" 

client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a very good teacher."},
        {
            "role": "user",
            "content": "Write a poem about a Unicorn"
        }
    ]
)

print(completion.choices[0].message)