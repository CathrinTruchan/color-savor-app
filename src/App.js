import "./App.css";
import "./Components/ColorCard/ColorCard.css";
import ColorCard from "./Components/ColorCard/ColorCard";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <div className="colorbox__container">
          <ColorCard colorCode={"#4c6ef5"} />
          <ColorCard colorCode={"#82c91e"} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
