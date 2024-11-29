import React from 'react'

const SeasonSelector = ({ seasons, selectedSeason, onSelectSeason }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {seasons.map((season) => (
        <button
          key={season.season}
          onClick={() => onSelectSeason(season)}
          className={`px-4 py-2 rounded-md text-white ${
            selectedSeason?.season === season.season
              ? "bg-blue-500"
              : "bg-gray-400 hover:bg-blue-400"
          }`}
        >
          {season.title}
        </button>
      ))}
    </div>
  );
}

export default SeasonSelector