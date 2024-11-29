import React from 'react'
import { usePodcasts } from '../data/PodcastContext'
import useFetchEpisodes from '../data/fetchEpisodes'
import SeasonSelector from './Components/seasonSelector'
import EpisodeList from './Components/EpisodeList'
import { useNavigate, useParams } from 'react-router-dom'



const Episodes = () => {
    const {episodes, selectedSeason, setSelectedSeason, loading, error } = usePodcasts()
    const { showId } = useParams()
    const navigate = useNavigate()

    useFetchEpisodes(showId)
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <p className="text-xl text-gray-500">Loading Episodes...</p>
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

      const backToPodcasts = ()=>{
        navigate(`..`); 
    }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    {/* Podcast Overview */}
    <section className="mb-2">
        <button 
          className='underline p-6'
          onClick={()=>backToPodcasts()}
          
        >
            Back to Episodes
        </button>
      <div className="md:flex items-center gap-6 p-6">
        <img
          src={episodes.image}
          alt={episodes.title}
          className="w-62 h-62 md:w-32 md:h-32 object-cover rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800 my-4">{episodes.title}</h1>
          <p className="text-gray-600 mt-2">{episodes.description}</p>
          <p className="text-sm text-gray-400 mt-1">
            Last updated: {new Date(episodes.updated).toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
    <section className="mb-8 p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Seasons</h2>
        <SeasonSelector
            seasons={episodes.seasons || []}
            selectedSeason={selectedSeason}
            onSelectSeason={setSelectedSeason}
        />
      </section>
      <section className="mb-8 px-6">
        <EpisodeList
            season={selectedSeason}
        />
      </section>
  </div>
  )
}


export default Episodes