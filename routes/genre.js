const express = require("express");
const router = express.Router();
const getSpotifyToken = require("../middlewares/spotifyAuth");
const { getGenres } = require("../controllers/Genre");

// Route to get all genres, using the middleware to obtain a Spotify token
router.get("/genres/", getSpotifyToken, getGenres);

module.exports = router;
