import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import  BeersDetailGallery  from "./Components/BeersDetailGallery"


export default function BeersDetailPage() {


var { id } = useParams();
let [beer, setBeer] = useState([])
console.log(beer)


useEffect(() => {
    axios.get(process.env.REACT_APP_BACK_URL + "beers/" + id).then(res => {
        const beerData = res.data[0];
        setBeer(beerData)
        console.log(beer)
        
    })
}, [])
    return (
        <div>
            <BeersDetailGallery beer={beer}/>
        </div>
    )
}
