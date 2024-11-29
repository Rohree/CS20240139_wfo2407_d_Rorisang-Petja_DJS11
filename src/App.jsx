import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AvailableShows from "./pages/AvailableShows";
import { PodcastProvider } from "./data/PodcastContext";
import Episodes from "./pages/Episodes";
import LikedPodcasts from "./pages/LikedPodcasts";

function App() {
  return (
    <PodcastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AvailableShows />} />
          <Route path="liked" element={<LikedPodcasts />} />
          <Route path="episodes/:showId" element={<Episodes />} />
        </Routes>
      </Router>
    </PodcastProvider>
  );
}

export default App;

