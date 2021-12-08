import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import spaghetti from './pat-spaghet.jpg';



const CardMenuSpecialiteExpandable = () => (
  <Card className="cardstyle">
    <CardHeader className="cardheader"
      title={<h3 style={{ color: 'black' }}>Spaghetti ou Rigatoni</h3>}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>


      <div className="container">
        <img src={spaghetti} className='imagemenu' />
        <div className="row">

          <div className="col-sm-6">

            <br />
            <h4>Spaghetti ou Rigatoni </h4>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sauce &agrave; la viande</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>13,25$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>15,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Boulettes de viande</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>15,95$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>18,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Pepperoni et sauce &agrave; la viande</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>14,95$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>17,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Champignons et sauce &agrave; la viande</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>14,95$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>17,95$ </td> </tr>
              </table>
            </p>
            <br />

            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Extra boulette de viande</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>3,25$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>3,25$ </td> </tr>
              </table>
            </p>

          </div>

          <div className="col-sm-6" >
            <br />
            <br />
            <br />
            <br />


            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Chaque extra</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>3,25$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>4,25$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sauce &agrave; la viande</h5>
            <p style={{ fontStyle: 'italic' }}>
              <table>
                <tr> <td>4oz </td> <td> </td> <td>2,50 </td> </tr>
                <tr> <td>8oz </td> <td> </td> <td>4,25$ </td> </tr>
                <tr> <td>10oz </td> <td> </td> <td>5,95$ </td> </tr>
                <tr> <td>petit format </td> <td> </td> <td>12,00$ </td> </tr>
                <tr> <td>grand format </td> <td> </td> <td>15,00$ </td> </tr>
              </table>
            </p>

            <br />
            <h4>Spaghetti ou Rigatoni ou Lasagne </h4>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Gratin&eacute; au four</h5>
            <p style={{ fontStyle: 'italic' }}>

              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>15,25$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>17,25$ </td> </tr>
              </table>
            </p>

            <br />
            <h5 style={{ color: 'red', fontFamily: 'fantasy' }}>Sp&eacute;cial Martini</h5>
            <p style={{ fontStyle: 'italic' }}>
              (Pepperoni, champignons, piments verts, fromage)
              <table>
                <tr> <td>R&eacute;guli&egrave;re </td> <td> </td> <td>16,95$ </td> </tr>
                <tr> <td>Jumbo </td> <td> </td> <td>18,95$ </td> </tr>
              </table>
            </p>

          </div>

        </div>
      </div>


    </CardText>
  </Card>
);

export default CardMenuSpecialiteExpandable;
