import React from 'react';
import { usePodcasts } from '../data/PodcastContext';
import { useNavigate } from 'react-router-dom';

const LikedPodcasts = () => {
  const { shows, likedPodcasts } = usePodcasts();
  const navigate = useNavigate();

  const liked = shows.filter((show) => likedPodcasts.includes(show.id));

  const handleShowClick = (id) => {
    navigate(`/episodes/${id}`);
  };

  return (
    <div className="bg-white min-h-screen p-6">
  
      <div className='flex justify-between'>
          <button
            className='text-3xl text-black underline mb-8'
            onClick={()=>navigate("..")}
          >Show All
          </button>
          <h1 className="text-3xl font-bold text-black mb-8"
            >Liked Podcasts
          </h1>
      </div>
      {
        liked.length === 0
        ? <div className="flex justify-center items-center h-screen">
            <p className="text-xl text-gray-500">No liked podcasts yet!</p>
          </div>
        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liked.map((show) => (
             <div
               key={show.id}
               className="bg-lime-50 text-left shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer"
               onClick={() => handleShowClick(show.id)}
             >
              <img src={show.image} className="rounded-lg" loading="lazy" />
              <h2 className="text-xl font-semibold text-gray-800">{show.title}</h2>
              <p className="text-gray-600 mt-2">
                {show.description.substring(0, 100)}...
              </p>
            </div>
        ))}
      </div>
      }
    </div>
  );
};

export default LikedPodcasts;
