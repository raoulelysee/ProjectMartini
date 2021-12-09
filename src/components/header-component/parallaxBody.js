import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from "react-dom";
import pizza from './pizza2.jpg';
import salad from './salad.jpeg';
import LazyHero from 'react-lazy-hero';
import vegs from './vegetable-food-hd.jpg';
import interac from './interac.jpeg';
import phone from './phone.jpg';



class ParallaxBody extends Component {


  render() {
    return (
      <div style={{ background: "black" }}>

        <div>
          <LazyHero imageSrc={pizza} minHeight="800px" isFixed="true" opacity="0.1">
            <p className="accueiltitle">Restaurant Martini pizza</p>
            <br />
            <p style={{ color: "red", fontSize: "25px", fontFamily: "comic sans ms", fontWeight: 'bold', textShadow: '2px 2px 5px white' }}>
              La meilleure pizza &agrave; Ahuntsic depuis plus de 45 ans.
            </p>
            <br />
          </LazyHero>


          <div>
            <br />
            <h3 style={{ textAlign: "center", color: "white" }}>Nous n'achetons que des produits de premi&egrave;re qualit&eacute;.</h3>
            <br />
            <p style={{ textAlign: "center", fontSize: "30px", color: "white" }}>Nos specialit&eacute;s</p>


            <p style={{ textAlign: "center", fontSize: "25px", color: "white" }}>
              Mets Italiens, Pizza, Sous-marins
              <br />
              Hamburger, Poutine, Sandwich et Salades
            </p>
            <br />
            <LazyHero imageSrc={vegs} minHeight="300px" isFixed="true" opacity="0.1">

              <br />

            </LazyHero>
            <br />
            <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>
              Heures de livraison
              <br />
              Dimanche au mardi : 11h00 a 21h00
              <br />
              Mercredi au samedi : 11h00 a 22h00
              <br />
              Livraison rapide et gratuite
              <br />
              &agrave; partir de 8,00$
              <br />
              <img alt="Credit Card Logos" src={interac} width="67" height="42" border="0" style={{ textAlign: "center" }} />
              <img alt="Credit Card Logos" src="http:///www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_4.gif" width="67" height="42" border="0" style={{ textAlign: "center" }} />
              <img alt="Credit Card Logos" src="http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_logo_8.gif" width="67" height="42" border="0" style={{ textAlign: "center" }} />
            </p>
            <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>Mentionnez que vous payez avec une carte lors de votre commande.</p>
            <br />

            <LazyHero imageSrc={salad} minHeight="500px" isFixed="true" opacity="0.1">

            </LazyHero>

            <div className="row">
              <div className="col-sm-6">
                <p className="accueilstylefooter">Coordonn&eacute;es</p>
                <p className="accueilstylefooter">Restaurant Pizzeria Martini
                  <br />
                  9481 Lajeunesse (coin Louvain)
                  <br />
                  Montr&eacute;al Qc H2M 1S5
                </p>
                <img alt="Credit Card Logos" src={phone} width="30" height="25" border="0" className="accueilstylefooter" />
                <a href="tel:+1-514-388-9672" className="accueilstylefooter">(514) 388-9672</a>
                <br />
                <img alt="Credit Card Logos" src={phone} width="30" height="25" border="0" className="accueilstylefooter" />
                <a href="tel:+1-514-387-0220" className="accueilstylefooter">(514) 387-0220</a>
                <br />
                <br />
              </div>
              <div className="col-sm-6">
                <p className="accueilstylefooter">Heures d'ouverture</p>

                <p className="accueilstylefooter">
                  Dimanche au mardi : 11h00 a 21h00
                  <br />
                  Mercredi au samedi : 11h00 a 22h00
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ParallaxBody;
