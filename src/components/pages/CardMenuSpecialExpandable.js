import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import pizzaGhetti from './pizza-ghetti.jpg';



const CardMenuSpecialExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Sp&eacute;ciaux</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={pizzaGhetti} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">
            <br />

            <h4>Pour livraison ou pour emporter seulement</h4>
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Festin familial # 1</h5>
            2 pizzas moyennes (toute garnie), 1 frite familiale, 4 boissons gazeuses
            <h5>39,95$</h5>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Festin familial # 2</h5>
            1 pizza moyenne (toute garnie), 1 grosse frite, 2 boissons gazeuses
            <h5>22,95$</h5>


          </div>

          <div className="col-sm-6" >

            <br />

            <h4>Pour livraison, pour emporter ou pour la salle &agrave; manger</h4>

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pizza-ghetti</h5>
            <h5>15,95$</h5>
            <h5>Extra : 8,00$ pour remplacer la pizza pour une petite</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pizza-c&eacute;sar</h5>
            <h5>16,95$</h5>
            <h5>Extra : 8,00$ pour remplacer la pizza pour une petite</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Spaghetti-c&eacute;sar</h5>
            <h5>16,95$</h5>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuSpecialExpandable;
