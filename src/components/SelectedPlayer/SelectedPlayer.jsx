import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = ({ player }) => {
  const { name, role, image } = player;
  return (
    <div className="flex justify-between border p-4 rounded-2xl border-black/10 items-center">
      <div className="flex items-center space-x-5">
        <img className="size-16 rounded-2xl" src={image} alt="" />
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div>
        <button className="btn text-red-400 text-2xl rounded-2xl size-14">
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
};

export default SelectedPlayer;
