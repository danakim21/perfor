import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "../styles/homepage.css";
import image1 from "../images/slide-image-1.png";
import image2 from "../images/slide-image-2.png";

class HomePage extends Component {
  render() {
    return (
      <>
        <Navigation pageNum={0} />
        <div id="home-1">
          <div id="home-1-text">
            <div>
              <p className="home-1-text-black">Find Your</p>
              <span className="home-1-text-pink">Fragrance</span>
            </div>
            <div>
              <p className="home-1-text-black">Choose Your</p>
              <span className="home-1-text-pink">Perfume</span>
            </div>
          </div>
          <div id="home-1-slideshow">
            <img src={image1} width="500" height="500" />
            <img src={image2} width="500" height="500" />
          </div>
        </div>
        <div id="home-2">
          <div>
            <h3>Search for your scent</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div>
            <h3>Search for your scent</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
