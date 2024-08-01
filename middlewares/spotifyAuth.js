const axios = require("axios");

const clientId = process.env.SPOTIFY_CLIENT_ID || "";
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
const authToken = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const getSpotifyToken = async (req, res, next) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${authToken}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    req.spotifyToken = response.data.access_token; // Attach the token to the request object
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

module.exports = getSpotifyToken;
