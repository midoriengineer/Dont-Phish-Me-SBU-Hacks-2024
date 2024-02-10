const dotenv = require('dotenv').config();
const OpenAI = require('openai');

const apiKey = dotenv.parsed.OPEN_API_KEY




const openai = new OpenAI({
  apiKey: apiKey, // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'CHAT GPT SUCSK' }],
    model: 'gpt-4',
  });
  console.log(chatCompletion.choices[0].message);

}

main();