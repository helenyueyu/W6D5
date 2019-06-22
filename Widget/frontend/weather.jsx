import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      latitude: 0, 
      longitude: 0 
    }; 
  }

  componentDidMount() {
    const that = this; 
    navigator.geolocation.getCurrentPosition(function(position) {
      that.setState({
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude 
      })
    })
    const request = new XMLHttpRequest(); 
  }

  render() {
    // console.log(`We got latitude: ${this.state.latitude}, longitude: ${this.state.longitude}`); 
    return (
      <h1>Weather</h1>
    )
  }
}

export default Weather; 