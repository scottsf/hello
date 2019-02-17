import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import route from './route';
import Nav from './components/nav/Nav';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === '/' ? null : <Nav />}
        {route}
      </div>
    );
  }
}

export default withRouter(App);
