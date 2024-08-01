const axios = require("axios");

const getArtistsByGenre = async (req, res, next) => {
  try {
    const { genreId } = req.params;
    const token = req.spotifyToken; // Get the token from the request object

    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=artist&query=genre:${genreId}&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

const getArtistDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.spotifyToken; // Get the token from the request object

    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

module.exports = {
  getArtistsByGenre,
  getArtistDetails,
};
