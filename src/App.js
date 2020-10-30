import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./nav";
import Example1 from "./carousel";
import Example2 from "./menu_bar";

import MainArea from "./MainArea";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
      </div>
      <div>
        <Example1></Example1>
      </div>
      <div>
        <h3>Menu</h3>
      </div>
      <div>
        <Example2></Example2>
      </div>

      <div>
        <MainArea></MainArea>
      </div>
    </div>
  );
}

export default App;
