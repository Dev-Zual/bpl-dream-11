import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PlayerData from "./components/PlayerData/PlayerData";

function App() {
  const [freeCredit, setFreeCredit] = useState(0);
  const handleFreeCredit = () => {
    setFreeCredit(freeCredit + 6000000);
  };
  return (
    <>
      <header className="container mx-auto">
        <Header freeCredit={freeCredit}></Header>
      </header>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <PlayerData freeCredit={freeCredit}></PlayerData>
      <Footer></Footer>
    </>
  );
}

export default App;
