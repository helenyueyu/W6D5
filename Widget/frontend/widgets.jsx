import React from 'react';

import Clock from './clock';
import Tab from './tab'; 
import Weather from './weather'; 
import Autocomplete from './autocomplete';

class Widget extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      tabs: [
      {title: 'Tokyo', content: 'Japan'}, 
      {title: 'Paris', content: 'France'}, 
      {title: 'London', content: 'England'}
      ],
      inputVal: "Harry",
      names: ["Harry", "Hermione", "Ron"]

  }; 
  }
  changeTab(){

  }
  render() {
    return (
      <div className="main">
        <Clock />
    
        <Tab header={this.state.tabs} onClick={() => console.log("I am clicked")}/> 

        <Weather />

        <Autocomplete input={this.state.inputVal} names={this.state.names} />
      </div>
    )

  }
}
export default Widget;