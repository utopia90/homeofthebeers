import React from "react";
import "./BeersDetailGallery.scss";

export default function BeersDetailGallery(props) {
  let beer = props.beer;

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="c-beerdetail-item">
          <div className="c-beerdetail-item-container">
            <figure className="c-beerdetail-item__item">
              <img
                src={beer.image_url}
                alt=""
                className="c-beerdetail-item__img"
              />
              <figcaption className="c-beerdetail-item__caption">
                {beer.name}
              </figcaption>
            </figure>
            <div className="c-beerdetail-item__data">
              <p className="c-beerdetail-item__description">
                <h4 className="c-beerdetail-item__description__title"><strong>Description:</strong></h4>
                {beer.description}
              </p>
              <p className="c-beerdetail-item__tips">
              <h4 className="c-beerdetail-item__tips__title"><strong>Tips:</strong></h4>
                {beer.brewers_tips}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
