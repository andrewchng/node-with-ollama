# node-with-ollama

https://ollama.com/ > install this and download model of your choice. Can use a smaller model is your machine cannot handle the larger model.

Smaller model with 1b parameters
```bash
ollama run llama3.2:1b 
```

Larger model with 1b parameters
```bash
ollama run llama3.2:3b 
```
---

The code in this app is is using llama3.2:3b in the example

To run the app in dev mode, any changes will rebuild the app
```bash
npm run dev 
```
---

To run the app
```bash
npm run start 
```