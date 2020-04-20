import React, { Component } from 'react'
import './resources/styles.css'

import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueNfo from './components/venueNfo/index'
import Highlights from './components/Highlights/index'
import Pricing from './components/pricing/index'
import Location from './components/location/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured/>
        <VenueNfo/>
        <Highlights/>
        <Pricing/>
        <Location/>
      </div>
    )
  }
}


export default App;
