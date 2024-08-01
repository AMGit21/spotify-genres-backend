const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  artistId: {
    type: String,
    required: true,
  },
  messages: [
    {
      sender: {
        type: String,
        enum: ["user", "ai"],
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
