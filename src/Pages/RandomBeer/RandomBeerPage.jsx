import React, { useEffect, useState } from 'react';
import axios from "axios";
import RandomBeerGallery from "./Components/RandomBeerGallery";
import "./RandomBeerPage.scss"





export default function RandomBeerPage() {
    
    const [beerName, setBeerName] = useState('');
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'beers/random')
        .then(res =>{
            const beer = res.data[0];
            setBeerName(beer);
            console.log(beerName)
        })
    }, [])

   
    
    return (

        <div>

          <RandomBeerGallery info={beerName}/>
        
        </div>
    )

    }