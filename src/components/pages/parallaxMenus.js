import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import spaghet from './spaghetti-pix.jpg';




class ParallaxMenus extends Component {


  render() {
    return (
      <div style={{ background: "black" }}>

        <div>
          <LazyHero imageSrc={spaghet} minHeight="500px" isFixed="true" opacity="0.1">
            <p className="accueiltitle">Menu</p>
            <br />
            <p style={{ color: "black", fontSize: "25px", fontFamily: "comic sans ms", fontWeight: 'bold', textShadow: '2px 2px 5px white' }}>Tous nos plats sont pr&eacute;par&eacute;s uniquement avec des produits de premi&egrave;re qualit&eacute;.</p>
          </LazyHero>



        </div>

      </div>
    );
  }
}

export default ParallaxMenus;
