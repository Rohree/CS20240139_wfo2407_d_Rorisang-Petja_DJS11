# Podcast App 🎧
This app fetches podcast data from a custom API and allows users to explore podcasts, filter them by genre, and dive into show details with seasons and episodes. The application uses React with Context API for state management and Tailwind CSS for styling.

## Features
- Browse Previews: Displays a list of podcasts using the preview API.
- Filter by Genre: Allows users to select a genre to filter available podcasts.
- Detailed Show View: Displays detailed information about a selected podcast, including seasons and episodes.
- State Management: Centralized state using useContext.

## Technologies Used
- React (useContext, useEffect, useState)
- Fetch API for fetching data
- Tailwind CSS for styling
- Custom API endpoints

## Installation

Clone the repository:
```
git clone <this repo>
cd podcast-app
```
Install dependencies:
```
npm install
```

Start the development server:
```
npm start
```

#### API Endpoints
Podcast Previews:
Fetches an array of podcast previews.
GET https://podcast-api.netlify.app

 #### Genres:
Returns an object containing available genres.
GET https://podcast-api.netlify.app/genre/

#### Show Details:
Fetches detailed information about a podcast, including seasons and episodes.
GET https://podcast-api.netlify.app/id/{SHOW_ID}