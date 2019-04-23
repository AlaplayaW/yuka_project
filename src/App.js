import React, { Component } from "react";
import "./App.css";

import Router from './pages/Router';
import NavbarTitle from './components/NavbarTitle';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTitle />
        <Router />
        <Footer />
      </div>
    );
  }
}


export default App;
