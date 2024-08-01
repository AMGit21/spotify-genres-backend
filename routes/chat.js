const express = require("express");
const { talkToAi, getChatHistory } = require("../controllers/chat");
const router = express.Router();

router.post("/gemini", talkToAi);
router.get("/chat-history/:userId/:artistId", getChatHistory);
module.exports = router;
