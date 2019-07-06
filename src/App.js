import React, { Component } from 'react'
import ReactDom from 'react-dom';

import logo, { ReactComponent } from './logo.svg';
import './App.scss';
import Navbar from '../src/Components/navbar/Navbar';
import TourList from './Components/TourList';

class App extends Component {
  render(){

    return (
    
      <main>
   <Navbar/>
   <TourList />
      </main>
    );
    

  }
}

export default App;
