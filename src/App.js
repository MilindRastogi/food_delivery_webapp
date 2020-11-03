import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav";
import Example1 from "./components/carousel";
import Example2 from "./components/menu_bar";
import MainArea from "./components/MainArea";
import Cart from "./components/Cart/cart.js";
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
        <Route path='/' render={props =>
                    <>
                      <Example1/>
                      <h1>Menu</h1>
                      <Example2/>
                      <FoodList></FoodList>
                      {/* <MainArea/> */}
                    </>} />
        <Route  component={Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
