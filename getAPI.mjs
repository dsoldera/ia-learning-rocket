import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a poem about a unicorn.",
        },
    ],
});

console.log(completion.choices[0].message);