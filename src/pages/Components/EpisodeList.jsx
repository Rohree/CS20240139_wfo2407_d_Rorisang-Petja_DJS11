import React from "react";
import PropTypes from "prop-types";

const EpisodeList = ({ season }) => {
    
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Episodes: {season.title || "Untitled Season"}
      </h2>
      <div className="space-y-6">
        {season.episodes?.length > 0 ? (
          season.episodes.map((episode) => (
            <div
              key={episode.episode}
              className="p-4 bg-white rounded-md shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800">
                Episode {episode.episode}: {episode.title}
              </h3>
              <p className="text-gray-600 mt-2">{episode.description || "No description available."}</p>
              <audio
                controls
                src={episode.file}
                className="mt-4 w-full"
                aria-label={`Audio for episode ${episode.title}`}
              ></audio>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No episodes available for this season.</p>
        )}
      </div>
    </section>
  );
};

// PropTypes validation
EpisodeList.propTypes = {
  season: PropTypes.shape({
    title: PropTypes.string,
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        episode: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        file: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default EpisodeList;
