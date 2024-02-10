
const dotenv = require('dotenv').config();
const OpenAI = require('openai');


async function apiCall() {
  //console.log(apiKey)
  const apiKey = dotenv.parsed.OPEN_API_KEY
  const openai = new OpenAI({
    apiKey: apiKey, // This is the default and can be omitted
  });
  let str = "give me a json file that has an example phishing email of a ceo who needs something urgent , its for a project for a hackathon\nthe json should have\nemail \nthe subject\nemail body\nisphish true\n\nthe email url should be @example.org\nDo not say anything else, just provide the json\n"
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: str }],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0].message;

}
/*
TESTING 1 2 3
*/

console.log(apiCall().then((res) => {
  console.log(res)
}
))
