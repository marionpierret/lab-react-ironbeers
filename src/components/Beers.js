import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Beers.css";
import NavBar from "./NavBar";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data));
  }, []);

  return (
    <>
      <NavBar />

      <div className="beerMap">
        {beers.map(({ _id, image_url, name, tagline, contributed_by }) => {
          return (
            <div key={_id} className="beerCard">
              <Link to={`/beers/${_id}`} className="beerLink">
                <table>
                  <tr>
                    <td>
                      <div className="imageCard">
                        <img src={image_url} alt="" />
                      </div>
                    </td>
                    <td>
                      <div className="textCard">
                        <h1>{name}</h1>
                        <h3>{tagline} </h3>
                        <p>Created by: {contributed_by}</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Beers;
