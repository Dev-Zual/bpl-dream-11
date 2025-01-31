import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PlayerData from "./components/PlayerData/PlayerData";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <Banner></Banner>
      <PlayerData></PlayerData>
      <Footer></Footer>
    </>
  );
}

export default App;
