import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import poutine from './poutine.jpg';


const CardMenuCasseExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Casse-cro&ucirc;te</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={poutine} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">
            <br />
            <h4>Frites et Poutines</h4>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Poutine au poulet</h5>
            <h5>10,75$ petite</h5>
            <h5>11,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Poutine au pepperoni</h5>
            <h5>10,75$ petite</h5>
            <h5>11,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Poutine r&eacute;guli&egrave;re</h5>
            <h5>8,95$ petite</h5>
            <h5>10,95$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Poutine italienne</h5>
            <h5>10,50$ petite</h5>
            <h5>12,25$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Poutine oignons et bacon</h5>
            <h5>11,50$ petite</h5>
            <h5>12,50$ grande</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Poutine Martini</h5>
            <h5>11,50$ petite</h5>
            <h5>12,50$ grande</h5>
            (Champignons, piments verts, pepperoni et fromage)

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Rondelles d'oignon</h5>
            <h5>5,75$ r&eacute;guli&egrave;re</h5>
            <h5>10,95$ familial</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Frites</h5>
            <h5>3,75$ petite</h5>
            <h5>4,50$ grande</h5>
            <h5>8,75$ familial</h5>

            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Frites avec sauce</h5>
            <h5>4,25$ petite</h5>
            <h5>5,50$ grande</h5>

          </div>

          <div className="col-sm-6" >

            <br />
            <h4> Ailes de poulet</h4>
            (Avec frites, sauce B.B.Q, pain et salade de chou)

            <br />
            ** Remplacer la frite en poutine pour 5,75$.
            <br />
            ** Remplacer la frite en salade pour 5,75$.

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>8 ailes</h5>
            <h5>13,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>12 ailes</h5>
            <h5>16,95$</h5>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>16 ailes</h5>
            <h5>22,50$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Aile individuelle</h5>
            <h5>1,75$</h5>

            <br />
            <h4> Autres</h4>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Boissons gazeuses</h5>
            <h5>2,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Caf&eacute; ou th&eacute;</h5>
            <h5>2,50$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Brio</h5>
            <h5>2,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Perrier</h5>
            <h5>3,00$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Jus de pomme</h5>
            <h5>2,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Jus d'orange</h5>
            <h5>2,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>G&acirc;teau au chocolat</h5>
            <h5>5,95$</h5>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Extras</h5>
            <h5>1,00$ Fromage</h5>
            <h5>1,50$ Bacon</h5>
            <h5>2,50$ Cornichon</h5>
          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuCasseExpandable;
