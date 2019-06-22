import React from "react";

class Clock extends React.Component{
  constructor(props){
    super(props);
    const date = new Date();
    const year = date.getFullYear(); 
    const month = date.getMonth(); 
    const day = date.getDate(); 
    const weekday = date.getDay(); 

    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    
    this.state = { 
      time: date.toLocaleTimeString(), 
      date: `${days[weekday]} ${month} ${day} ${year}`
    };

    this.tick = this.tick.bind(this);
  }

  render(){
    return (
      <div>
        <h1 className="clock-title">Clock</h1>
        <div className="widget1">
          <h1 className="clock">
            <div>Time: </div>
            <div>{this.state.time}</div>
          </h1>
          <h1 className="clock">
            <div>Date: </div>
            <div>{this.state.date} </div>
          </h1>
        </div>
      </div>
    )
  }

  tick(){
    const date = new Date();
    this.setState({ time: date.toLocaleTimeString() });
  }

  componentDidMount(){
    this.handle = setInterval(this.tick, 1000); 
    this._ismounted = true; 
  }

  componentWillUnmount() {
    clearInterval(this.handle); 
    this._ismounted = false; 
  }

}

export default Clock;