import React, { Component } from 'react'
import './resources/styles.css'

import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueNfo from './components/venueNfo/index'
import Highlights from './components/Highlights/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured/>
        <VenueNfo/>
        <Highlights/>
      </div>
    )
  }
}


export default App;
