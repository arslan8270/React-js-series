import './App.css';
import React,{PureComponent} from 'react'
class  PureComponentone extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
    console.log("check re-rendring")
  return (
    <div className="App">
     <h1>{this.state.count}</h1>
      <button 
      onClick={()=>{this.setState({count:1})}}
      >Update Count</button>
    </div>
  );
 }
}

export default PureComponentone;