import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import pizza from './pizza-martini.jpg';


const CardMenuPizzaExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Pizzas</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={pizza} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Fromage</h5>
            <p style={{ fontStyle: 'italic' }}> Fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>9,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>11,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>14,95$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>19,50$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>24,50$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>26,50$ </td> </tr>
              </table>
            </p>


            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Champignons</h5>
            <p style={{ fontStyle: 'italic' }}> Champignons, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>10,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>12,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>15,95$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>20,95$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>25,95$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>27,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Piments verts</h5>
            <p style={{ fontStyle: 'italic' }}> Piments verts, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>10,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>12,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>15,95$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>20,95$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>25,95$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>27,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pepperoni</h5>
            <p style={{ fontStyle: 'italic' }}> Pepperoni, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>10,95$ </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>16,95$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>22,95$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>27,25$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>31,50$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Bacon</h5>
            <p style={{ fontStyle: 'italic' }}> Bacon, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>10,95$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>13,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>18,25$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>24,50$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>29,25$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>32,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Garniture extra</h5>
            <p style={{ fontStyle: 'italic' }}>
              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>2,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>3,00$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>3,50$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>4,25$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>4,75$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>5,25$ </td> </tr>
              </table>
            </p>

          </div>

          <div className="col-sm-6" >
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>V&eacute;g&eacute;tarienne</h5>
            <p style={{ fontStyle: 'italic' }}> Champignons, piments, oignons,tomates, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>11,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>13,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>18,25$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>24,50$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>29,25$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>32,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Toute Garnie</h5>
            <p style={{ fontStyle: 'italic' }}> Pepperoni, champignons, piments verts, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>11,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>13,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>18,25$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>24,50$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>29,25$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>32,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Hawaienne</h5>
            <p style={{ fontStyle: 'italic' }}> Jambon, ananas, fromage

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>11,25$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>13,95$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>18,25$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>24,50$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>29,25$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>32,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sp&eacute;cial Martini No 1</h5>
            <p style={{ fontStyle: 'italic' }}> Toute garnie avec sauce a la viande et olives

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>12,50$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>15,25$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>20,25$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>26,75$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>31,95$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>34,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sp&eacute;cial Martini No 2</h5>
            <p style={{ fontStyle: 'italic' }}> Toute garnie avec bacon et oignons

              <table>
                <tr> <td>8 pouces (Bambino) </td> <td> </td> <td>12,50$  </td> </tr>
                <tr> <td>10 pouces (Petite) </td> <td> </td> <td>15,25$ </td> </tr>
                <tr> <td>12 pouces (Moyenne) </td> <td> </td> <td>20,25$ </td> </tr>
                <tr> <td>14 pouces (Grande) </td> <td> </td> <td>26,75$ </td> </tr>
                <tr> <td>16 pouces (Extra-grande) </td> <td> </td> <td>31,95$ </td> </tr>
                <tr> <td>18 pouces (Jumbo) </td> <td> </td> <td>34,95$ </td> </tr>
              </table>
            </p>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuPizzaExpandable;
