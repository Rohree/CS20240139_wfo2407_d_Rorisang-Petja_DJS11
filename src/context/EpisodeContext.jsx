import React, { createContext, useContext, useState, useEffect } from "react";
import { usePodcasts } from "./ShowContext";

const EpisodeContext = () => {
    
    useEffect(()=>{
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
    })

  return (
    <div>EpisodeContext</div>
  )
}

export default EpisodeContext