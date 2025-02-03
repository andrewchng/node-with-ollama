import ollama from "ollama";
import { ChatOllama } from "@langchain/ollama";

const modelName = "llama3.2:latest";

// using basic ollama library to run LLM locally
const main = async () => {
  try {
    const prompt = "What is the capital of France?";

    console.log("Prompting for a response...");
    console.log(prompt);
    const response = await ollama.chat({
      model: modelName, // or any model name you've downloaded with Ollama
      messages: [{ role: "user", content: prompt }],
    });
    console.log(response.message.content); // Output: Paris
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// Using Langchain to run ollama's LLM locally
const langchain = async () => {
  try {
    const model = new ChatOllama({ model: modelName });

    const prompt = "Explain quantum mechanics in simple terms.";
    console.log("Prompting for a response...");
    console.log(prompt);

    const res = await model.invoke(prompt);
    console.log(res.content);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// langchain();
main();
