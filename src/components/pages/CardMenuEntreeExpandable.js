import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import feta from './feta-cheese.jpg';



const CardMenuEntreeExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Entr&eacute;es</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={feta} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Assiette de fromage feta</h5>
            <h5>8,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Entr&eacute;e de tzatziki avec pain pita</h5>
            <h5>8,95$</h5>

          </div>

          <div className="col-sm-6" >

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pain &agrave; l'ail gratin&eacute;</h5>
            <h5>4,25$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pain &agrave; l'ail</h5>
            <h5>2,25$</h5>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuEntreeExpandable;
