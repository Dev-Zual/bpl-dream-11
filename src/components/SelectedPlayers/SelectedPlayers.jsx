import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ setRoute, selected, handleDeleteSelected }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {selected.map((player) => (
          <SelectedPlayer
            key={player.playerId}
            player={player}
            handleDeleteSelected={handleDeleteSelected}
          />
        ))}
      </div>
      <button
        onClick={() => setRoute(true)}
        className="btn mt-5 bg-yellow-400 border-4 py-5 border-white ring-1 rounded-2xl font-semibold text-xl ring-yellow-400"
      >
        Add More Player
      </button>
    </div>
  );
};
SelectedPlayers.propTypes = {
  setRoute: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
};
export default SelectedPlayers;
