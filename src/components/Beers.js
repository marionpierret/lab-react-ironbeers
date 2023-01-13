import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Beers.css";


const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data));
  }, []);

  return (
    <>


      <div className="beerMap">
        {beers.map(({_id, image_url, name, tagline, contributed_by}) => {
          return (
               <div key={_id}>
               <Link to={`/beers/${_id}`}>
                      <img src={image_url} alt="" />
                   
                      <h1>{name}</h1>
                
                      <h2>{tagline} </h2>
                  
                      <p>{contributed_by}</p>
></Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Beers;
