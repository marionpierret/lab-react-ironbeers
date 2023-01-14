import { useParams } from "react-router";
import {useState, useEffect} from "react"
import axios from 'axios';
import './BeerDetails.css';
import NavBar from "./NavBar";


const BeerDetails=()=>{

let { beerId } = useParams()
const [details, setDetails] = useState({})

useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setDetails(response.data));
  }, []);

console.log(details)
return(
<>
<NavBar/>

<div className = "beerDetails">

<img src={details.image_url} alt=""/>
<table>
<tr>
<td><h1>{details.name}</h1></td>
<td><h2>{details.attenuation_level}</h2></td>
</tr>
<tr>
  <td><h3>{details.tagline}</h3></td>
  <td><h5>{details.first_brewed}</h5></td>
</tr>
<tr>
  <td><h4>{details.description}</h4></td>
</tr>
<tr>
  <td><p>{details.contributed_by}</p></td>
</tr>
</table>

</div>
</>
)

}


export default BeerDetails