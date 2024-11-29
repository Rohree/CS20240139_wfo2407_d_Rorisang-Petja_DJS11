import { useEffect, useState } from 'react';
import { usePodcasts } from './PodcastContext';

const useFetchEpisodes = (id) => {
  const { episodes, setEpisodes, setLoading, setError } = usePodcasts();


  useEffect(() => {
    if (!id) return; 

    const fetchPodcasts = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setEpisodes(data);
        setLoading(false)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [id]); 
};

export default useFetchEpisodes;
