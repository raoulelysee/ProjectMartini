
import React, { Component } from 'react';

export default class Menu extends React.Component {
    state = {
      visible: false,
    };

    show() {
      this.setState({ visible: true });
    }

    hide() {
      this.setState({ visible: false });
    }

    render() {
      const { visible } = this.state;

      return (
        <div className="menu">
          {
            visible &&
              <div className={this.props.alignment}>{this.props.children}</div>
          }
        </div>
      );
    }
}
