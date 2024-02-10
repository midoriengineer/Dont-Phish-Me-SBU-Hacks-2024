
const dotenv = require('dotenv').config();
const OpenAI = require('openai');


async function apiCall() {
  //console.log(apiKey)
  const apiKey = dotenv.parsed.OPEN_API_KEY
  const openai = new OpenAI({
    apiKey: apiKey, // This is the default and can be omitted
  });
  const str = "show me a json file example but dont say anything, do it for a project that will include the subject, email, and body "
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: str }],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0].message;

}
/*
TESTING 1 2 3
*/

apiCall().then((res) => {
  console.log(res);
  const jsonString = JSON.stringify(res);
  console.log(jsonString);
}
)
//
