import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./headerMenu";
import Contact from './Contact';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: 'transparent',
  width: "60%",
  border: "none",

};


class Header extends Component {


  render() {
    return (
      <header>
        <nav className="placename">
          <ul>
            {/*             <li className="restoname">
              Martini Pizza
            </li> */}
            <p className="martini">  Martini Pizza </p>
          </ul>
        </nav>

        <nav className="menuvertical">
          <ul>
            <li className="first">
              <Link to="/">Accueil</Link>

            </li>
            <li>

              <p>|</p>
            </li>

            <li>
              <Link to="Menu">Menu</Link>

            </li>

            <li>

              <p>|</p>
            </li>

            <li className="last">
              <Link to="Contact">Contact</Link>

            </li>
          </ul>

        </nav>

        <div style={styles} className="monburger">

          <Popup
            modal
            overlayStyle={{ background: "white", bottom: "50%", left: "50%" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>
        </div>

      </header>
    );
  }
}

export default Header;
