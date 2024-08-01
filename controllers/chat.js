const Chat = require("../models/Chat");
require("dotenv").config();
const { runChat } = require("../middlewares/runChat");
const talkToAi = async (req, res) => {
  try {
    const { userInput, history, userId, artistId } = req.body;
    if (!userInput || !userId || !artistId) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Convert 'role' to 'sender' if necessary
    const formattedHistory = history.map((message) => ({
      sender: message.role || message.sender, // Convert 'role' to 'sender' if present
      text: message.text,
    }));

    // Generate AI response
    const aiResponse = await runChat(userInput);

    // Find existing chat document or create a new one
    let chat = await Chat.findOne({ userId, artistId });

    if (chat) {
      // Append the new messages to the existing history
      chat.messages.push(
        { sender: "user", text: userInput },
        { sender: "ai", text: aiResponse }
      );
    } else {
      // Create a new chat document if it doesn't exist
      chat = new Chat({
        userId,
        artistId,
        messages: [
          ...formattedHistory,
          { sender: "user", text: userInput },
          { sender: "ai", text: aiResponse },
        ],
      });
    }

    // Save the chat document
    await chat.save();

    res.json({ response: aiResponse });
  } catch (error) {
    next(error);
  }
};

const getChatHistory = async (req, res) => {
  try {
    const { userId, artistId } = req.params;

    // Retrieve chat history from the database
    const chat = await Chat.findOne({ userId, artistId });

    if (!chat) {
      return res.json({ error: "No chat history found" });
    }

    res.json(chat);
  } catch (error) {
    next(error);
  }
};

module.exports = { talkToAi, getChatHistory };
