import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import logo from "../../Shared/Images/logo.png";
import "./HomePage.scss"
import { Link, useHistory } from "react-router-dom";


export default function HomePage() {
  return (
    <div>
      <div className="c-homepage">
        <h1 className="c-homepage__title">HOME OF THE BEERS</h1>
        <img className="c-homepage__logo" src={logo} />
        <Link to={`beers`}><button className="c-homepage__button">See All Our Beers</button></Link>
        <Link to={`random`}><button className="c-homepage__button">Get A Random Beer</button></Link>

      </div>
    </div>
  );
}
