import Players from "../Players/Players";

const PlayerData = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-12 mb-5">
        <h2 className="text-2xl font-bold">Available Players</h2>
        <div>
          <button className="btn border-r-0 bg-yellow-300">Available</button>
          <button className="btn border-l-0">Selected</button>
        </div>
      </div>
      <Players></Players>
    </div>
  );
};

export default PlayerData;
