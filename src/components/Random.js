
import { Link } from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'

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
<img 
        src={random.image_url}
        alt=''
        className='detailImg'
      />

            <h1>{random.name}</h1>
            <h4>{random.tagline}</h4>



            <h1>{random.attenuation_level}</h1>
            <h5>{random.first_brewed}</h5>


  
        <p>{random.description}</p>
        <p>{random.contributed_by}</p>


</>
    )
}


export default Random