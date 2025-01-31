import PropTypes from "prop-types";
import { HiUser } from "react-icons/hi";
import { IoFlag } from "react-icons/io5";

const Player = ({ player }) => {
  const { name, country, role, image, battingType, biddingPrice, bowlingType } =
    player;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="p-4">
        <img className="h-52" src={image} alt="Shoes" />
      </figure>
      <div className="p-4">
        <h2 className="card-title">
          <HiUser /> {name}
        </h2>
        <div className="flex justify-between items-center">
          <p className="flex items-center space-x-2">
            <IoFlag />
            <span>{country}</span>
          </p>
          <button className="btn">{role}</button>
        </div>
        <hr className="my-4 border border-gray-400/20" />
        <div className="space-y-3">
          <h4 className="font-bold text-xl">Rating</h4>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold">Batting </span>
              <p className="font-semibold">{battingType}</p>
            </div>
            <div>
              <span className="font-bold">Bowling</span>
              <p>{bowlingType}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Price: ${biddingPrice}</p>
            <button className="btn bg-gray-200">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
