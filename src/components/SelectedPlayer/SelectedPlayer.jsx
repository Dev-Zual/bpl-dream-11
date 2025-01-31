import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = () => {
  return (
    <div className="flex justify-between border p-2 rounded-2xl border-black/10 items-center">
      <div className="flex items-center space-x-2">
        <img src="" alt="" />
        <div>
          <h3 className="text-xl font-medium">name</h3>
          <p>left-handed-bat</p>
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

export default SelectedPlayer;
