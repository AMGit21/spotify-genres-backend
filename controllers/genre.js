const axios = require("axios");

// Function to fetch genres
const getGenres = async (req, res, next) => {
  try {
    const token = req.spotifyToken; // Access the token set by the middleware

    const response = await axios.get(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Respond with the genres data
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching genres:", error);
    next(error); // Pass error to global error handler
  }
};

module.exports = {
  getGenres,
};
