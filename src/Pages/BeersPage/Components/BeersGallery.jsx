import React from 'react'
import './BeersGallery.scss';
import { Link, useHistory } from "react-router-dom";


export default function BeersGallery(props) {
    return (
        <div>
             <div className="c-beers-gallery">
            <div className="row">
                {/*{items}*/}
                {props.beers.map((beer, index) =>
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <div className="c-beers-gallery__item-container">
                            {/*<img src="heart-1.png" alt=""/>*/}
                            <figure className="c-beers-gallery_item">
                                {/* <img className="c-beers-gallery__love-it" onClick={() => {setFavoriteAmiibo(item)}}
                                     src="heart-1.png" alt=""/> */}
                                <h3 className="c-beers-gallery_title">{beer.name.length < 22? beer.name : beer.name.substring(0, 19) + " ..."}</h3>
                                <img className="c-beers-gallery_img" src={beer.image_url}/>
                                <h4 className="c-beers-gallery_subtitle">{beer.tagline}</h4> 
                                <Link to={`beerdetail/${beer.id}`}><button className="c-beers-gallery_button">See More</button></Link>   
                            </figure>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    )
}

