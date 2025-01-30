import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <Banner></Banner>
    </>
  );
}

export default App;
