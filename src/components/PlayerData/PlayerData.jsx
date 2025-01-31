import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from "prop-types";

const PlayerData = ({ freeCredit, setFreeCredit }) => {
  const [route, setRoute] = useState(true);
  const [selected, setSelected] = useState([]);

  const handleSelected = (player) => {
    // checking if not enough money
    if (freeCredit < player.biddingPrice) {
      alert("not enough money");
      return;
    }

    // checking if player is already choose
    // const isExist = selected.find((p) => p.playerId === player.playerId);
    if (!selected.includes(player)) {
      setSelected([...selected, player]);
      setFreeCredit(freeCredit - player.biddingPrice);
    } else {
      alert("alreaday exist");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-12 mb-5">
        {route ? (
          <h2 className="text-2xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-2xl font-bold">
            Selected Player ({selected.length}/6)
          </h2>
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
        <SelectedPlayers setRoute={setRoute} selected={selected} />
      )}
    </div>
  );
};
PlayerData.propTypes = {
  freeCredit: PropTypes.number.isRequired,
  setFreeCredit: PropTypes.func.isRequired,
};
export default PlayerData;
