import "./App.css";
import NavBar from "./components/header/NavBar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  let saludo = "Hola Crack";

  return (
    <div className="App">
      <NavBar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
