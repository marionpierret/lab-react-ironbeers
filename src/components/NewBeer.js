import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import NavBar from "./NavBar";
import './NewBeer.css'


const NewBeer = () => {

const [name, setName] = useState("")
const [tagline, setTagline] = useState("")
const [description, setDescription] = useState("")
const [firstBrewed, setFirstBrewed] = useState("")
const [brewers, setBrewed] = useState("")
const [attenuationLevel, setAttenuationLevel] = useState(0)
const [contributed, setContributed] = useState("")
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()

const body = {name, tagline, description, firstBrewed, brewers, attenuationLevel, contributed } 

axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
.then(() => {
    setName("")
    setTagline("")
    setDescription("")
    setFirstBrewed("")
    setBrewed("")
    setAttenuationLevel("")
    setContributed("")
    navigate('/beers')
})
.catch(console.log)
}

    return(
<>
<NavBar/>
<form onSubmit={handleSubmit} className="form">
<label>Name</label>
<input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
<label>Tagline</label>
<input type='text' name='tagline' value={tagline} onChange={(e) => setTagline(e.target.value)}/>
<label>Description</label>
<input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
<label>First Brewed</label>
<input type='text' name='firstbrewers' value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
<label>Brewers Tips</label>
<input type='text' name='brewers' value={brewers} onChange={(e) => setBrewed(e.target.value)}/>
<label>Attenuation Level</label>
<input type='text' name='attenuationLevel' value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}/>
<label>Contributed By</label>
<input type='text' name='contributedby' value={contributed} onChange={(e) => setContributed(e.target.value)}/>
<button type='submit'>ADD NEW</button>
</form>
</>

)
}

export default NewBeer;