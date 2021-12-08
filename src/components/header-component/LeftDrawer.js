import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
  Link
} from 'react-router-dom';

export default class LefttDrawer extends Component{

  constructor(props){
    super(props);
    this.state = {open:true};
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(){
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.props.handleClose();
  }

  render(){
    return(
      <div>
      <Drawer
          docked={false}
          width= {100}
          open= {this.props.open}
          onRequestChange={(open) => this.setState({open})}
      >

        <Link to="/"> <MenuItem onTouchTap={this.handleClose}> Accueil </MenuItem> </Link>
        <Link to="/Menu"> <MenuItem onTouchTap={this.handleClose}> Home </MenuItem> </Link>
        <Link to="/Contact"> <MenuItem onTouchTap={this.handleClose}> Contact </MenuItem> </Link>

      </Drawer>
      </div>

    );
  }

}
