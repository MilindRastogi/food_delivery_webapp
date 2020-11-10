import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav";
import Example1 from "./components/carousel";
import Example2 from "./components/menu_bar";
import MainArea from "./components/MainArea";
import Cart from "./components/Cart/cart.js";
import Form from "./components/Cart/Form.js"
import Default from "./components/Default.js"
import {Switch,Route} from 'react-router-dom';
import FoodList from './components/FoodList'



function App() {
  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
      </div>
      <Switch>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path='/' render={props =>
                    <>
                      <Example1/>
                      <div style={{margin:"15px"}}><h1><span className="menu_heading">Menu</span></h1></div>
                      <Example2/>
                      <FoodList></FoodList>
                    </>} />
        <Route  component={Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
