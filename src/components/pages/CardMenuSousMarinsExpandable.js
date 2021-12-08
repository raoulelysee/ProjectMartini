import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import sub from './sous-marin.jpg';


const CardMenuSousMarinsExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Sous-Marins</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={sub} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">
            <br />
            <h4> Chauds</h4>
            Garnis de salade, tomates, oignons, et vinaigrette Martini

            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Steak et fromage fondu</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Steak, pepperoni et fromage fondu</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Steak, capicollo et fromage fondu</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Steak, champignons, piments verts</h5>
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}> et fromage fondu</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pepperoni et fromage fondu</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>V&eacute;g&eacute;tarien</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>


          </div>

          <div className="col-sm-6" >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sp&eacute;cial Martini</h5>
            Steak, capicollo, pepperoni, Champignons,
            <br /> piments verts et fromage fondu
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>10,95$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>12,50$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>14,50$ </td> </tr>
              </table>
            </p>


            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Boulettes de viande,</h5>
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}> sauce viande et fromage fondu</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>11,50$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>13,50$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>15,50$ </td> </tr>
              </table>
            </p>
            <br />

            <h4>Froids</h4>
            Garnis de salade, tomates et vinaigrette Martini
            <br />
            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Capicollo et fromage</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>10,45$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>11,75$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>13,95$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Salade de poulet et fromage</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>10,45$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>11,75$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>13,95$ </td> </tr>
              </table>
            </p>

            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Garniture supplementaire</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>7 pouces </td> <td> </td> <td>2,00$  </td> </tr>
                <tr> <td>10 pouces</td> <td> </td> <td>2,50$ </td> </tr>
                <tr> <td>14 pouces </td> <td> </td> <td>2,75$ </td> </tr>
              </table>
            </p>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuSousMarinsExpandable;
