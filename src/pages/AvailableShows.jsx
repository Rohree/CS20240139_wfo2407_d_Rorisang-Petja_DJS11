import {React, useMemo} from 'react'
import { usePodcasts } from '../data/PodcastContext'
import useFetchShows from '../data/fetchShows';
import { useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";

const AvailableShows = () => {
    const { 
            shows, 
            loading, 
            error, 
            isSorted, 
            toggleSort, 
            toggleLike, 
            likedPodcasts 
          } = usePodcasts()

    const navigate = useNavigate()
    
  useFetchShows()
  
  const sortedShows = useMemo(() => {
    return isSorted 
            ? [...shows].sort((a, b) => a.title.localeCompare(b.title))
            : shows;
  }, [shows, isSorted]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-500">Loading podcasts...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  function lastUpdated(date){
    return  new Date(date).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "UTC",
    });
  }

  const handleShowClick = (id) => {
    navigate(`/episodes/${id}`); 
  }

  return (
    <div className="bg-blue-950 min-h-screen p-6">
      <div className='flex justify-between'>
      <h1 className="text-3xl font-bold text-white mb-8">
        Available Shows
      </h1>
      <div className='flex gap-3'>
            <button 
              className='bg-white p-2 mb-8 font-bold rounded-lg' 
              onClick = {()=>navigate('/liked')}
              > Liked
            </button>
            <button 
              className='bg-white p-2 mb-8 font-bold rounded-lg' 
              onClick={toggleSort}
              > Sort A-Z 
            </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(isSorted ? sortedShows: shows).map((show) => (
          <div
            key={show.id}
            className="bg-yellow-400 text-left shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => handleShowClick(show.id)}
          >
              <img 
                src={show.image} 
                className="rounded-lg" 
                loading='lazy'
              />
              <div className='flex justify-between'>
                <h2 className="text-xl font-semibold text-gray-800">
                  {show.title}
                </h2>
                <button onClick={(e) => { e.stopPropagation(); toggleLike(show.id); }}>
                  {likedPodcasts.includes(show.id) ? <FcLike /> : <CiHeart />}
                </button>
              </div>
              <h2>
                Seasons: {show.seasons}
              </h2>
              <h2>Genres: {show.genres.join(', ')}</h2>
              <p>
                <span className='font-bold'>Last Updated:</span> 
                {lastUpdated(show.updated)}
              </p>
              <p className="text-gray-600 mt-2">
                {show.description.substring(0, 100)}...
              </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableShows