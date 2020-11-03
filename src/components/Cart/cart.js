import React, { Component } from 'react';
 import CartList from "./CartList";
// import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart"
import CartColumns from "./CartColumns";
import {MenuConsumer} from "../../context";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
    render() {
        return (
            <section>
                <MenuConsumer>
                    {value =>{
                        const { cart } = value;
            if (cart.length > 0) {
              return (<React.Fragment>
                  <h1>Your Cart</h1>
                  <CartColumns></CartColumns>
                  <CartList value={value}></CartList>
                  <CartTotals value={value}></CartTotals>
                  </React.Fragment>
                  )
            }
            else {
                return <EmptyCart></EmptyCart>
            }
        }}
                  </MenuConsumer>
                </section>
            
        )
    }
}
