import React, { Component } from 'react'
import ReactDom from 'react-dom';

import logo, { ReactComponent } from './logo.svg';
import './App.scss';
import Navbar from '../src/Components/navbar/Navbar';

class App extends Component {
  render(){
    return <Navbar/>

  }
}

export default App;
