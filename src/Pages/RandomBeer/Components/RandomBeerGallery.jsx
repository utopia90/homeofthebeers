import { render } from '@testing-library/react';
import React from 'react';
import "./RandomBeerGallery.scss";

export default function RandomBeerGallery(props) {

const info = props.info;
console.log(info)

    return (
        <div>
             <div className="d-flex justify-content-center">
        <div className="c-randombeer">
          <div className="c-randombeer-container">
            <figure className="c-randombeer__item">
              <img
                src={info.image_url}
                alt=""
                className="c-randombeer__img"
              />
              <figcaption className="c-randombeer__caption">
                {info.name}
              </figcaption>
            </figure>
            <div className="c-randombeer__data">
              <p className="c-randombeer__description">
                <h4 className="c-randombeer__description__title"><strong>Description:</strong></h4>
                {info.description}
              </p>
              <p className="c-randombeer__tips">
              <h4 className="c-randombeer__tips__title"><strong>Tips:</strong></h4>
                {info.brewers_tips}
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
    }
