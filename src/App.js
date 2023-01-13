import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Beers from "./components/Beers";
import Random from "./components/Random";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home"
import BeerDetails from "./components/BeerDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
<div>
<NavBar/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails/>}/>
        <Route path="/random-beer" element={<Random />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
</div>
  );
}

export default App;
