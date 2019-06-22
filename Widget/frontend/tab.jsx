import React from 'react'; 

class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabs: props.header, 
      currentTab: 0 
    }
  }
  render(){
    // console.log(this.state)
    return (
      <div>
        <h1 className="clock-title">Tabs</h1>
        <div className="widget2"> 
          <ul className="titles">
            {this.state.tabs.map(
              (tab, idx) => (
                <h1 className="tab-header" onClick={() => this.handleClick(idx)} key={Math.random()}> {tab.title}</h1>
              )
            )}
          </ul>
          <article>{this.state.tabs[this.state.currentTab].content}</article>
        </div>
      </div>
    )
  }
  handleClick(idx){
    this.setState({
      currentTab: idx
    })
  }
}

export default Tab; 