import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// includes
import './Assets/default.css';
//components
import Header from './components/header-component/header';
import Footer from './components/footer-component/footer';
import Menus from './components/pages/menus';
import parallaxBody from './components/header-component/parallaxBody';
import Contact from './components/header-component/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

          <Route exact path='/' component={parallaxBody} />
          <Route exact path='/Menu' component={Menus} />
          <Route exact path='/Contact' component={Contact} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
