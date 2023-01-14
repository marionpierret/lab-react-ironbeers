
import { Link } from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'
import NavBar from "./NavBar";
import './BeerDetails.css'

const Random = () => {

const [random, setRandom] = useState({})

useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => setRandom(response.data))
      .catch(console.log)
  }, [])

    return(

<>
<NavBar/>
<div className = "beerDetails">

<img src={random.image_url} alt=""/>
<table>
<tr>
<td><h1>{random.name}</h1></td>
<td><h2>{random.attenuation_level}</h2></td>
</tr>
<tr>
  <td><h3>{random.tagline}</h3></td>
  <td><h5>{random.first_brewed}</h5></td>
</tr>
<tr>
  <td><h4>{random.description}</h4></td>
</tr>
<tr>
  <td><p>{random.contributed_by}</p></td>
</tr>
</table>

</div>

</>
    )
}


export default Random