import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ setRoute }) => {
  return (
    <div>
      <div>
        <SelectedPlayer />
      </div>
      <button
        onClick={() => setRoute(true)}
        className="btn bg-yellow-400 border-4 py-5 border-white ring-1 rounded-2xl font-semibold text-xl ring-yellow-400"
      >
        Add More Player
      </button>
    </div>
  );
};
SelectedPlayers.propTypes = {
  setRoute: PropTypes.func.isRequired,
};
export default SelectedPlayers;
