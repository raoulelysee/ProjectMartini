import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import gyro from './gyrosHD.jpg';



const CardMenuAssietteExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Sandwich & Burger</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={gyro} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">
            <br />
            <h4> Chauds</h4>
            ** Remplacer la frite en poutine pour 5,75$.
            <br />
            ** Remplacez les frites par des rondelles d'oignon pour 3,00$.
            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Assiette de Hamburger</h5>
            <h5>13,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Assiette de burger au poulet</h5>
            <h5>13,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Assiette de Poulet chaud</h5>
            <h5>13,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Bifteck hach&eacute; avec oignons frits</h5>
            <h5>13,95$</h5>
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Hamburger</h5>
            <h5>5,95$</h5>
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>1 Gyro avec frites et salade</h5>
            <h5>14,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>2 Gyros avec frites</h5>
            <h5>14,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Gyro au boeuf ou au poulet</h5>
            <h5>7,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Fish & Chips</h5>
            <h5>14,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Cheeseburger</h5>
            <h5>6,25$</h5>

          </div>

          <div className="col-sm-6" >

            <br />
            <h4> Sandwich a trois etages</h4>
            ** Changez la frite en salade pour 5,75$.

            <br />
            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Club sandwich (avec viande blanche)</h5>
            <h5>14,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Club de vendredi (oeuf, tomate et fromage)</h5>
            <h5>14,95$</h5>

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Club Martini Special</h5>
            <h5>15,50$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Club pour deux (2)</h5>
            <h5>Extra 4,50$</h5>

            <br />
            <br />
            <h4> Sandwichs assortis</h4>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich Western</h5>
            <h5>6,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich au poulet</h5>
            <h5>6,50$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich au poulet et tomates</h5>
            <h5>6,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich aux tomates et bacon</h5>
            <h5>6,95$</h5>


            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich aux tomates et fromage</h5>
            <h5>6,50$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich au fromage grill&eacute; et bacon</h5>
            <h5>6,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sandwich au fromage grill&eacute;</h5>
            <h5>5,25$</h5>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuAssietteExpandable;
