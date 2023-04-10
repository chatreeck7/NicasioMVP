import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: getGptApiKey(),
  })
);

export function sendMessage() {
  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        //   { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content:
          "Hello ChatGPT"
            // "I need menus ! to reduce my time to think the receipt and ingredient per meal.",
        },
        //   {
        //     role: "assistant",
        //     content:
        //       "The proeficient food assistant such as Gordon Ramsey, IAN Kittichai",
        //   },
      ],
    })
    .then((res) => {
      console.log(res.data);
    });
}

export function getGptApiKey() {
  return process.env.REACT_APP_GPT_API_KEY;
}

export function getSpoonApiKey() {
  return process.env.REACT_APP_SPOON_API_KEY;
}
