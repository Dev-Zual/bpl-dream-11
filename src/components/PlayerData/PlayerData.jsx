import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const PlayerData = () => {
  const [route, setRoute] = useState(true);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-12 mb-5">
        <h2 className="text-2xl font-bold">Available Players</h2>
        <div>
          <button
            onClick={() => setRoute(!route)}
            className={`btn border-r-0 ${route && "bg-yellow-300"}`}
          >
            Available
          </button>
          <button
            onClick={() => setRoute(!route)}
            className={`btn border-l-0 ${!route && "bg-yellow-300"}`}
          >
            Selected
          </button>
        </div>
      </div>
      {route ? <Players /> : <SelectedPlayers />}
    </div>
  );
};

export default PlayerData;
