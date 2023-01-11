import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />} path="/">
            <Route element={<Home />} path="/" />
            <Route element={<Create />} path="/create" />
            <Route element={<Search />} path="/search" />
            <Route element={<Recipe />} path="/recipes/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
