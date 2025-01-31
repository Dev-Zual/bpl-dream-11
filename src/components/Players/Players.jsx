import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
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
        <Player key={player.playerId} player={player} />
      ))}
    </div>
  );
};

export default Players;
