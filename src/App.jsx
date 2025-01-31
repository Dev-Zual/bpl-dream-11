import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PlayerData from "./components/PlayerData/PlayerData";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [freeCredit, setFreeCredit] = useState(0);
  const handleFreeCredit = () => {
    setFreeCredit(freeCredit + 6000000);
    toast.success("Success, You Claimed Free Credit", {
      position: "top-center",
    });
  };
  return (
    <>
      <ToastContainer />

      <header className="container mx-auto">
        <Header freeCredit={freeCredit}></Header>
      </header>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <PlayerData
        freeCredit={freeCredit}
        setFreeCredit={setFreeCredit}
      ></PlayerData>
      <Footer></Footer>
    </>
  );
}

export default App;
