Here’s the updated README file with the section about installing MongoDB Compass:

```markdown
# Backend Assignment

This repository contains the backend part of the assignment.
The backend is built with Node.js and Express, providing RESTful APIs for interacting with the frontend and fetching data from external sources like Spotify and Gemini.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Steps to Fetch Data from Spotify](#steps-to-fetch-data-from-spotify)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Thank You](#thank-you)

## Project Overview

The backend application provides APIs to support a chat interface in the frontend.
It fetches artist data from Spotify, manages user chat history, and interacts with an AI for chat responses.

## Features

- RESTful APIs for Spotify data
- RESTful APIs for chat interaction
- Caching chat history
- User management

## Technologies Used

- Node.js
- Express
- MongoDB (for user and chat history management)
- Axios
- dotenv (for environment variables)
- Gemini API (with specific customization)
- Spotify API

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AMGit21/spotifyGenresArtists-GeminiChat-backend.git
   cd spotifyGenresArtists-GeminiChat-backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your environment variables:
   ```sh
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   GEMINI_API_KEY=your_gemini_api_key
   MONGO_URI=your_mongodb_connection_string
   PORT=your_server_port
   ```

4. **Install and Set Up MongoDB Compass:**
   - Download and install MongoDB Compass from the [MongoDB Compass download page](https://www.mongodb.com/products/compass).
   - Open MongoDB Compass and connect to your MongoDB database using the connection string you provided in your `.env` file (`MONGO_URI`).

### Steps to Fetch Data from Spotify

1. **Set up Spotify API credentials:**
   Obtain your Spotify API credentials (Client ID and Client Secret) from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

2. **Store credentials:**
   Store your Spotify API credentials in a `.env` file in the root directory as mentioned above.

## Running the Application

To start the server, run:

```sh
npm run dev
```

This will start the backend server on [http://localhost:4000](http://localhost:4000).

## API Endpoints

### Spotify Data

- `GET /api/genres` - Fetches a list of music genres from Spotify.
- `GET /api/artists/:genreId` - Fetches a list of artists for a given genre from Spotify.

### Chat Interaction

- `POST /api/gemini` - Sends a chat message to the Gemini API and gets a response.
- `GET /api/chat-history/:userId/:artistId` - Fetches the chat history for a specific user and artist.

## Folder Structure

```
spotifyGenresArtists-GeminiChat-backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── artist.js
│   │   ├── chat.js
│   │   └── genre.js
│   ├── middlewares/
│   │   ├── runChat.js
│   │   └── spotifyAuth.js
│   ├── models/
│   │   └── Chat.js
│   └── routes/
│       ├── artist.js
│       ├── chat.js
│       └── genre.js
├── .env
├── index.js
├── package.json
└── README.md
```

## Thank You

Thank you for checking out this project. Feel free to reach out if you have any questions or feedback.
```
