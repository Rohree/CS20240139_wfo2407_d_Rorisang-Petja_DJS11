import React, { createContext, useContext, useState, useEffect } from "react";

const PodcastContext = createContext();
export const usePodcasts = () => useContext(PodcastContext);

// Provider component to manage podcast data
export const PodcastProvider = ({ children }) => {
  const [shows, setShows] = useState([]); // Store podcast data
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null); // Manage error state
  const [isSorted, SetIsSorted] = useState(false)

  // Fetch podcasts from API
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app");
        if (!response.ok) {
          throw new Error("Failed to fetch podcasts");
        }
        const data = await response.json();
        setShows(data); // Update previews
        setLoading(false); // Update loading state
      } catch (err) {
        setError(err.message); // Set error
        setLoading(false); // Update loading state
      }
    };

    fetchPodcasts();
  }, []);

  
    const toggleSort = () => {
    SetIsSorted((prevState) => !prevState);
    // alert(isSorted)
  };
  

  return (
    <PodcastContext.Provider value={{ shows, loading, error, toggleSort, isSorted }}>
      {children}
    </PodcastContext.Provider>
  );
};
