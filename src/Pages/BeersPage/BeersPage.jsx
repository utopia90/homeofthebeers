import React, { useEffect, useState } from 'react';
import axios from "axios";
import BeersGallery from "./Components/BeersGallery"
import BeerSearch from "./Components/BeerSearch/BeerSearch"

let beers = [];

export default function BeersPageGallery() {

    const [filteredBeers, setFilteredBeers] = useState([]);

    useEffect(() => {

        axios.get(process.env.REACT_APP_BACK_URL + 'beers').then(res =>{
        let beersLocal = res.data;
        beers = beersLocal;
        setFilteredBeers(beersLocal)
        
    })

    }, [])

    const filterBeers = (filterValues) => {
        const filteredLocalBeers = [];

        for (const beer of beers) {
            let beerIsOk = true;
            for (const key in filterValues) {
                if (filterValues.hasOwnProperty(key)) {
                    const localValue = beer[key];
                    const filterValue = filterValues[key];
                    if (!localValue || (localValue && filterValue && filterValue !== '' && !localValue.toLowerCase().includes(filterValue.toLowerCase()))) {
                        beerIsOk = false;
                        break;
                    }
                }
            }
            if (beerIsOk) {
                filteredLocalBeers.push(beer);
            }
        }

        setFilteredBeers(filteredLocalBeers);
    }
    return (
        <div>
            <BeerSearch fnSubmit={filterBeers}/>
            <BeersGallery beers={filteredBeers}/>
        </div>
    )
}
