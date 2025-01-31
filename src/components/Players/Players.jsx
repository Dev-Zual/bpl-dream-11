import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ handleSelected }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("data.json");
      const data = await res.json();
      setPlayers(data);
    }
    fetchData();
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {players.map((player) => (
        <Player
          key={player.playerId}
          player={player}
          handleSelected={handleSelected}
        />
      ))}
    </div>
  );
};

Players.propTypes = {
  handleSelected: PropTypes.func.isRequired,
};

export default Players;
