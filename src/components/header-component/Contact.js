
import React, { Component } from 'react';
import Mymap from './GoogleMap';
import LazyHero from 'react-lazy-hero';
import lasagna from './lasagna.jpg'
import interac from './interac.jpeg';



class Contact extends Component {



  render() {
    return (

      <div>


        <LazyHero imageSrc={lasagna} minHeight="500px" isFixed="true" opacity="0.1">
          <p className="accueiltitle">Contact</p>
          <br />
          <p style={{ color: "black", fontSize: "25px", fontFamily: "comic sans ms", fontWeight: 'bold', textShadow: '2px 2px 5px white' }}>La meilleure pizza &agrave; Ahuntsic depuis plus de 45 ans.</p>
        </LazyHero>


        <div style={{ background: 'black' }}>
          <div style={{ textAlign: 'center' }}>
            <br />
            <h3 style={{ textAlign: "center", color: "white" }}>Restaurant Martini Pizza</h3>
            <p style={{ fontSize: '20px', textAlign: "center", color: "white" }}>  9481 Lajeunesse (coin Louvain)
              <br /> Montr&eacute;al Qc H2M 1S5</p>

            <br />
            <h4 style={{ textAlign: "center", color: "white" }}>Heures d'ouverture et de livraison</h4>

            <p className="accueilstylefooter">
              Dimanche au mardi : 11h00 a 21h00
              <br />
              Mercredi au samedi : 11h00 a 22h00
            </p>

            <br />

          </div>
        </div>
        <br />
        <Mymap />
        <br />

        <div style={{ background: 'black', textAlign: 'center', height: 'auto' }}>
          <br />
          <p style={{ fontSize: '20px', textAlign: "center", color: "white" }}>Pour un service rapide et courtois, appelez nous au :</p>

          <a href="tel:+1-514-388-9672" className="phonecontact">(514) 388-9672</a>
          <br />
          <a href="tel:+1-514-387-0220" className="phonecontact">(514) 387-0220</a>
          <br />
          <br />

          <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>

            Livraison rapide et gratuite &agrave; partir de 8,00$
            <br />
            <br />
            <img alt="Credit Card Logos" src={interac} width="67" height="42" border="0" style={{ textAlign: "center" }} />
            <img alt="Credit Card Logos" src="http:///www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_4.gif" width="67" height="42" border="0" style={{ textAlign: "center" }} />
            <img alt="Credit Card Logos" src="http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_logo_8.gif" width="67" height="42" border="0" style={{ textAlign: "center" }} />
          </p>

          <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>&Agrave; mentionner lors de votre commande.</p>

          <br />
        </div>



      </div>




    );
  }
}

export default Contact;
