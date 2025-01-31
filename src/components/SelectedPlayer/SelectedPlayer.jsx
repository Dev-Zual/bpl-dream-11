import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = ({ player, handleDeleteSelected }) => {
  const { name, role, image, playerId, biddingPrice } = player;
  return (
    <div className="flex justify-between border p-4 rounded-2xl border-black/10 items-center">
      <div className="flex items-center space-x-5">
        <img className="size-16 rounded-2xl" src={image} alt="" />
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p>{role}</p>
          <p>
            <span className="font-semibold">Price:</span> {biddingPrice}
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDeleteSelected(playerId)}
          className="btn text-red-400 text-2xl rounded-2xl size-14"
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
};

export default SelectedPlayer;
