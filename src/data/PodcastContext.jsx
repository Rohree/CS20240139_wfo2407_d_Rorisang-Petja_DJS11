import React, { createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const PodcastContext = createContext();
export const usePodcasts = () => useContext(PodcastContext);

// Provider component to manage podcast data
export const PodcastProvider = ({ children }) => {
  const [shows, setShows] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [selectedSeason, setSelectedSeason] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSorted, SetIsSorted] = useState(false)
  const [likedPodcasts, setLikedPodcast] = useState([])


  const toggleLike = (showId) => {
    setLikedPodcast((prev) =>
      prev.includes(showId)
      ? prev.filter((id) => id !== showId) 
      : [...prev, showId]
    );
  };
  
  const toggleSort = () => {
    SetIsSorted((prevState) => !prevState);
  };
  

  return (
    <PodcastContext.Provider value={
        { 
          shows, 
          setShows, 
          loading, 
          setLoading, 
          error, 
          setError, 
          toggleSort, 
          isSorted,
          episodes,
          setEpisodes,
          selectedSeason,
          setSelectedSeason,
          likedPodcasts,
          toggleLike
        }
      }>
      {children}
    </PodcastContext.Provider>
  );
};
