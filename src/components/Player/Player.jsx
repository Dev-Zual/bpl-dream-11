import { HiUser } from "react-icons/hi";
import { IoFlag } from "react-icons/io5";

const Player = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="p-4">
        <h2 className="card-title">
          <HiUser /> Card Title
        </h2>
        <div className="flex justify-between items-center">
          <p className="flex items-center space-x-2">
            <IoFlag />
            <span>Country</span>
          </p>
          <button className="btn">All-rounder</button>
        </div>
        <hr className="my-4 border border-gray-400/20" />
        <div className="space-y-3">
          <h4 className="font-bold text-xl">Rating</h4>
          <div className="flex justify-between items-center">
            <p className="font-semibold">left hand bat</p>
            <p>left hand bat</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Price: $150000</p>
            <button className="btn bg-gray-200">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
