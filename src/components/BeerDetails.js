import { useParams } from "react-router";
import {useState, useEffect} from "react"
import axios from 'axios'


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



<div className = "beerDetails">


<img src={details.image_url} alt=""/>
<h1>{details.name}</h1>
<h4>{details.tagline}</h4>
<h5>{details.first_brewed}</h5>
<p>{details.attenuation_level}</p>
<p>{details.description}</p>
<p>{details.contributed_by}</p>
</div>
)

}


export default BeerDetails