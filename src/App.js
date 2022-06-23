
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Cards from "./Components/Cards"
import data from "../src/data"

function App() {
  const cards = data.map((element) => {
    return (
      <Cards 
        id={element.id}
        element={element} 
      />
    )
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-section">
        {cards}
      </div>
    </div>
  );
}

export default App;
