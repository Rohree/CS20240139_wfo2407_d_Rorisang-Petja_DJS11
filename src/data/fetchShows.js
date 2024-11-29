import { useEffect } from 'react';
import { usePodcasts } from './PodcastContext';

const useFetchShows = () => {
  const { setShows, setLoading, setError } = usePodcasts();

  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true); // Start loading state
      try {
        const response = await fetch('https://podcast-api.netlify.app');
        if (!response.ok) {
          throw new Error('Failed to fetch showa from server');
        }
        const data = await response.json();
        setShows(data); // Update shows
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPodcasts();
  }, []); 
};

export default useFetchShows;
