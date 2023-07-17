import "./App.css";
import React from "react";
import SubComponent from "./SubComponent";
function ReuseComponent() {
  const users = [
    {
      name: "Arslan",
      email: "arslan@test.com",
      contact: "111",
    },
    {
      name: "Khan",
      email: "khan@test.com",
      contact: "222",
    },
    {
      name: "Baloch",
      email: "baloch@test.com",
      contact: "333",
    },
    {
      name: "Ali",
      email: "ali@test.com",
      contact: "444",
    },
  ];
  return (
    <div className="App">
      <h1>Reuse component with list</h1>
      {users.map((item,i) => (
        <SubComponent data={item}/>
      ))}
    </div>
  );
}

export default ReuseComponent;
