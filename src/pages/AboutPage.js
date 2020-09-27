import React, { Component } from "react";
import Navigation from "../components/Navigation";
import image1 from "../images/about-image-1.png";
import image2 from "../images/about-image-2.png";
import image3 from "../images/about-image-3.png";
import "../styles/aboutpage.css";

class AboutPage extends Component {
  render() {
    return (
      <>
        <Navigation pageNum={3} />
        <div id="about-1">
          <img src={image1} width="300" />
          <div>
            <p>
              <span className="italic">P E R F O R</span> is a recommendation
              search engine for perfumes
            </p>
            <p>The word “PERFOR” is a combination of</p>
            <p>“Perfume For” and “Perfume &amp; Odor”</p>
            <p>Perfumare, to smoke through</p>
          </div>
        </div>
        <hr />
        <div id="about-2">
          <h3>
            A perfume has <span className="italic">three notes</span>
          </h3>
          <div id="about-three-notes">
            <div>
              <h4 className="italic">Top Note</h4>
              <p>Initial Smell.</p>
              <p>Last 15 to 120 minutes.</p>
              <p>Typically includes citrus</p>
              <p>and fruity scents.</p>
            </div>
            <div>
              <h4 className="italic">Heart Note</h4>
              <p>Main essence.</p>
              <p>Shows up after Top Note fades.</p>
              <p>Last for around 4 hours.</p>
              <p>Typically includes heavy florals.</p>
            </div>
            <div>
              <h4 className="italic">Base Note</h4>
              <p>Foundation.</p>
              <p>Shows up after Heart Note fades.</p>
              <p>Typically includes heavy</p>
              <p>smells and herbs.</p>
            </div>
          </div>
        </div>
        <hr />
        <div id="about-3">
          <h3>Perfume Categories</h3>
          <div id="about-3-categories">
            <div id="about-3-text">
              <div className="about-3-category">
                <p className="italic about-3-cat-title">Floral</p>
                <p>Roses, Jasmine, Lilies, Lotus, Violets, Marigolds</p>
              </div>
              <div className="about-3-category">
                <p className="italic about-3-cat-title">Fresh</p>
                <p>Citrus Fruits (Lemon, Orange), Green (Leaves, Herbs)</p>
              </div>
              <div className="about-3-category">
                <p className="italic about-3-cat-title">Oriental</p>
                <p>Incense, Amber, Scnadalwood, Patchouli, Vetiver</p>
              </div>
              <div className="about-3-category">
                <p className="italic about-3-cat-title">Woody</p>
                <p>Oaks, Woods, Musk, Tobacco, Leather</p>
              </div>
            </div>
            <img id="about-3-image" src={image2} width="300" />
          </div>
        </div>
        <hr />
        <div id="about-4">
          <h3>Perfume Concentrations</h3>
          <div id="about-4-concentration">
            <div className="about-4-text">
              <div>
                <p>Parfum</p>
                <p>20 - 30 % Concentration</p>
              </div>
              <div>
                <p>Eau de Parfum</p>
                <p>15 - 20 % Concentration</p>
              </div>
            </div>
            <img src={image3} width="10" />
            <div className="about-4-text">
              <div>
                <p>Eau de Cologne</p>
                <p>2 - 4 % Concentration</p>
              </div>
              <div>
                <p>Eau Fraiche</p>
                <p>1 - 3 % Concentration</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
