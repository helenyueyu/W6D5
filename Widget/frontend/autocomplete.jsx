import React from "react"

class Autocomplete extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      input: props.input,
      names: props.names
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  render(){
    return (
      <div> 
        <input type="text" value={this.state.input} onKeyDown={(e) => this.handleKeyPress(e)}/>
        <ul>  
          {this.state.names.map((name, idx) => (
            <li key={idx}> {name} </li>
          ))}
        </ul>
      </div>
    )
  }
  handleKeyPress(e){
    // this.setState({
    //   input: "Hermione"
    // })
    console.log(e.key)
  }
}

export default Autocomplete;

