import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
