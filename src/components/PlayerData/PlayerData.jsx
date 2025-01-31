import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const PlayerData = () => {
  const [route, setRoute] = useState(true);
  const [selected, setSelected] = useState([]);

  const handleSelected = (player) => {
    setSelected([...selected, player]);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-12 mb-5">
        {route ? (
          <h2 className="text-2xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-2xl font-bold">Selected Player (0/6)</h2>
        )}
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
            Selected {selected.length}
          </button>
        </div>
      </div>
      {route ? (
        <Players handleSelected={handleSelected} />
      ) : (
        <SelectedPlayers setRoute={setRoute} />
      )}
    </div>
  );
};

export default PlayerData;
