import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: getGptApiKey(),
  })
);

export const sendMessage = async (ingredients: string[]) => {
  let content = `I have ingrediecns such as: `;
  let result = "";
  // formatted list of ingredients into the natural language format
  const formattedIngredients = (ingredients: string[]) => {
    ingredients.map((ingredient) => {
      content += ` ${ingredient}, `;
    });
  };

  formattedIngredients(ingredients);

  content += `Can you cook 3 meals (prefer Thai food) with these ingredients for me ? And please return in this format: \nMenu: ..... \nCooking direction: \n \t 1: .... \n \t 2: .... .`;

  console.log("content: ", content);

  try {
    const response = await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: content,
          },
          {
            role: "assistant",
            content:
              "The proeficient food assistant such as Gordon Ramsey, IAN Kittichai",
          },
        ],
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.choices[0].message?.content) {
          result = res.data.choices[0].message?.content;
        }
        return res.data;
      });
    console.log("Response: ", response);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export function getGptApiKey() {
  return process.env.REACT_APP_GPT_API_KEY;
}

export function getSpoonApiKey() {
  return process.env.REACT_APP_SPOON_API_KEY;
}
