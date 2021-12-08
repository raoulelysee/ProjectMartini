import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import salade from './salade-olives.jpg';



const CardMenuSaladExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Salades</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={salade} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade C&eacute;sar</h5>
            <h5>7,95$ petite</h5>
            <h5>10,75$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade du chef</h5>
            <h5>7,95$ petite</h5>
            <h5>10,75$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade avec Olives</h5>
            <h5>9,25$ petite</h5>
            <h5>10,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade Grecque</h5>
            <h5>12,95$ petite</h5>
            <h5>14,95$ grande</h5>

          </div>

          <div className="col-sm-6" >

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade au Poulet</h5>
            <h5>12,95$ petite</h5>
            <h5>14,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade au thon</h5>
            <h5>13,25$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade du chef avec poulet grill&eacute;</h5>
            <h5>16,25$ petite</h5>
            <h5>18,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade c&eacute;sar avec poulet grill&eacute;</h5>
            <h5>16,25$ petite</h5>
            <h5>18,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade grecque avec poulet grill&eacute;</h5>
            <h5>16,25$ petite</h5>
            <h5>18,95$ grande</h5>

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Extra: Fromage Feta sur salade</h5>
            <h5>4,00$ petite</h5>
            <h5>5,00$ grande</h5>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuSaladExpandable;
