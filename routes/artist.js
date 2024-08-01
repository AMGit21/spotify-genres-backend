const express = require("express");
const router = express.Router();
const getSpotifyToken = require("../middlewares/spotifyAuth");
const {
  getArtistsByGenre,
  getArtistDetails,
} = require("../controllers/Artist");

// Use the middleware to attach the Spotify token
router.get("/artists/:genreId", getSpotifyToken, getArtistsByGenre);
router.get("/artist/:id", getSpotifyToken, getArtistDetails);

module.exports = router;
