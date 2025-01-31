import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
const PlayerData = ({ freeCredit, setFreeCredit }) => {
  const [route, setRoute] = useState(true);
  const [selected, setSelected] = useState([]);

  const handleSelected = (player) => {
    // checking if not enough money
    if (freeCredit < player.biddingPrice) {
      toast.error("Error, Not enough money", { position: "top-center" });
      return;
    }
    // checking if select more then 6
    if (selected.length >= 6) {
      toast.error("Error, Already selected 6 player", {
        position: "top-center",
      });
      return;
    }

    // checking if player is already choose
    const isExist = selected.find((p) => p.playerId === player.playerId);
    if (!isExist) {
      setSelected([...selected, player]);
      setFreeCredit(freeCredit - player.biddingPrice);
      toast.success(`${player.name}, Selected`, { position: "top-center" });
    } else {
      toast.error(`${player.name} Already selected`, {
        position: "top-center",
      });
    }
  };

  const handleDeleteSelected = (id) => {
    const remaining = selected.filter((p) => p.playerId !== id);
    setSelected(remaining);
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
        <SelectedPlayers
          setRoute={setRoute}
          selected={selected}
          handleDeleteSelected={handleDeleteSelected}
        />
      )}
    </div>
  );
};
PlayerData.propTypes = {
  freeCredit: PropTypes.number.isRequired,
  setFreeCredit: PropTypes.func.isRequired,
};
export default PlayerData;
