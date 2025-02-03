import ollama from 'ollama';

const main = async () => {
  try {
    const model = "llama3.2:latest";
    const prompt = "What is the capital of France?";
    
    console.log("Prompting for a response...");
    console.log(prompt);
    const response = await ollama.chat({
      model: model, // or any model name you've downloaded with Ollama
      messages: [{ role: 'user', content: prompt }],
    });
    console.log(response.message.content); // Output: Paris
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

main();