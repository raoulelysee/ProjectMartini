import React from "react";
import {Link} from 'react-router-dom';


export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><Link to="/">Accueil</Link></li>
      <li onClick={close}><Link to="Menu">Menu</Link></li>
      <li onClick={close}><Link to="Contact">Contact</Link></li>
    </ul>
  </div>
);
