import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardMenuPizza from './CardMenuPizzaExpandable';
import CardMenuSpecialite from './CardMenuSpecialiteExpandable';
import CardMenuSousMarins from './CardMenuSousMarinsExpandable';
import CardMenuAssiette from './CardMenuAssietteExpandable';
import CardMenuCasseCroute from './CardMenuCasseExpandable';
import CardMenuSalade from './CardMenuSaladExpandable';
import CardMenuEntree from './CardMenuEntreeExpandable';
import CardMenuSpecial from './CardMenuSpecialExpandable';
import ParallaxMenus from './parallaxMenus';




const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  textColor: 'black'
};


class Menus extends Component {

  render() {
    return (

      <MuiThemeProvider >
        <ParallaxMenus />
        <div className="menus">

          <div className="wrapperdefonds" style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
            <br />
            <br />
            <CardMenuPizza style={{ borderRadius: '5px' }} />

            <br />

            <CardMenuSpecialite />

            <br />

            <CardMenuSousMarins />

            <br />

            <CardMenuAssiette />

            <br />

            <CardMenuCasseCroute />
            <br />

            <CardMenuSalade />
            <br />

            <CardMenuEntree />
            <br />
            <CardMenuSpecial />
            <br />
            <br />

          </div>


        </div>
      </MuiThemeProvider >
    );
  }
}

export default Menus;
