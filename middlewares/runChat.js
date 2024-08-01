const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.GEMINI_API_KEY;

const runChat = async (userInput) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "The AI should be context-aware on the website, answering questions about the artist. If the user asks unrelated questions, the AI should respond that it can only answer questions about the artist and their music.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, I understand. I will be context-aware and focus on answering questions about the artist and their music. If the user asks something unrelated, I will politely explain that I am here to discuss the artist and their work.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "i gave the data from spotify api" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Please provide me with the Spotify API data you have. I need the specific data related to the artist you want me to be context-aware about.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Artist name: The full name of the artist.\nArtist ID: The unique Spotify ID for the artist.\nGenre: The primary genre of the artist.\nBiography: A short biography about the artist's career and background.\nDiscography: A list of albums and songs by the artist.\n picture of the artist, and under it: \ntotal followers\npopularity number",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, I understand. Please provide me with the artist name, artist ID, genre, biography, discography, picture of the artist, total followers, and popularity number. I'll use this information to create a context-aware AI for this artist. I'll be able to answer questions about the artist's music, career, and background. If a user asks an unrelated question, I will politely explain that I am here to discuss the artist and their work.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "https://open.spotify.com/" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "You've given me the general Spotify website URL, but I need the specific URL for the artist's profile on Spotify.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "you need to learn the genres info also" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "You are right! I need to learn the genre information as well. I can access genre information from the Spotify API, but I need the artist's Spotify ID to do that. Please provide me with the specific artist's Spotify URL. Once I have that, I can extract their ID and then get information about their genres from Spotify.",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  return result.response.text();
};
module.exports = { runChat };
