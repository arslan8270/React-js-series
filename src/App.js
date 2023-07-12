import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Clscomp from './Clscomp';
import Student from './Student';
import Profunc from './Profunc';
import Procls from './Procls';
import Getinbox from './Getinbox';
import HideShow from './HideShow';
import Formdata from './Formdata';
import Profile from './Profile';
import PassFunc from './PassFunc';
import Members from './Members';
import RenderCycle from './RenderCycle';

let data = "khan baloch"
class App extends React.Component{

  constructor()
  {
    console.log("Constructor")
    super();
    this.state={
      count:0
    }
  }

  componentDidUpdate(preProps,preState,snapshot)
  {
      console.log("componentDidUpdate",preState.count,this.state.count)

  if(this.state.count<10)
  {
    this.setState({count:this.state.count+1})
  }

  }


  render()
  {
    console.log("render")
  function Apple() {
    return (<div>Apple component</div>)
  }



  function getData()
  {
    alert("Hello from App")
  }


  return (
    <div className="App">
      <h1>{data}</h1>
      

      <Getinbox/>
      <HideShow/>
      <Formdata/>
      <Profile/>
      <Student name={"arslanbaloch"} email={"iamarslanbaloch@gmail.com"} />     
      <PassFunc data={getData}/>
        <Members data={getData}/>
        <RenderCycle/>

        <h1>Component did update{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:1})}}>Update Name</button>



    
    </div>
  );

  }
}

export default App;
