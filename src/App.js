import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Clscomp from "./Clscomp";
import Student from "./Student";
import Profunc from "./Profunc";
import Procls from "./Procls";
import Getinbox from "./Getinbox";
import HideShow from "./HideShow";
import Formdata from "./Formdata";
import Profile from "./Profile";
import PassFunc from "./PassFunc";
import Members from "./Members";
import RenderCycle from "./RenderCycle";
import WillUnmount from "./WillUnmount";
import Hook from "./Hook";
import UseEffectHook from "./UseEffectHook";
import "./style.css";
import style from "./custom.module.css";
import Buttons from "./Buttons";
import ListMap from "./ListMap";
import NestedArray from "./NestedArray";
import ReuseComponent from "./ResuseComponent";
import Cols from "./Cols";
import Child from "./Child";

let data = "khan baloch";
class App extends React.Component {



  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      count: 0,
      show: true,
      newdata: "ali",
    };
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentDidUpdate", preState.count, this.state.count);

    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  shouldComponentUpdate() {
    console.log("Shouldcomponentupdate", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
  }

  render() {

    function parentAlert()
    {
      alert(data)
    }
    console.log("render");
    function Apple() {
      return <div>Apple component</div>;
    }

    function getData() {
      alert("Hello from App");
    }

    return (
      <div className="App">
        <h1 className="primary">{data}</h1>
        <h1 style={{ color: "blue", backgroundColor: "black" }}>{data}</h1>
        <h1 className={style.success}>{data}</h1>

        <Getinbox />
        <HideShow />
        <Formdata />
        <Profile />
        <Student name={"arslanbaloch"} email={"iamarslanbaloch@gmail.com"} />
        <PassFunc data={getData} />
        <Members data={getData} />
        <RenderCycle />
        <Hook />

        <h1>Component did update{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update Name
        </button>

        {this.state.show ? <WillUnmount /> : <h1>Child component removed</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle child component
        </button>

        <UseEffectHook />
        <Buttons />
        <ListMap />
        <NestedArray />
        <ReuseComponent />
        <Child alert={parentAlert}/>

        <div>
          <h1>React Fragment</h1>
          <table>
            <tbody>
              <tr>
                <Cols />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
