import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newbeer from "../assets/new-beer.png";
import randombeer from "../assets/random-beer.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/beers" className="homelink">
        <img src={beers} alt="all-beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet. Et dolorum quis et quod deserunt in saepe
          pariatur. Ut ducimus quidem et ullam quibusdam id recusandae aliquam
          et autem esse.
        </p>
      </Link>
      <Link to="/random-beer" className="homelink">
        <img src={randombeer} alt="all-beers" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet. Et dolorum quis et quod deserunt in saepe
          pariatur. Ut ducimus quidem et ullam quibusdam id recusandae aliquam
          et autem esse.
        </p>
      </Link>
      <Link to="/new-beer" className="homelink">
        <img src={newbeer} alt="all-beers" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet. Et dolorum quis et quod deserunt in saepe
          pariatur. Ut ducimus quidem et ullam quibusdam id recusandae aliquam
          et autem esse.
        </p>
      </Link>
    </div>
  );
};

export default Home;
