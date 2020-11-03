import React, { Component } from 'react';
import Food from "./Food.js";
import {MenuConsumer} from "../context"
import {Col, Container, Row ,CardDeck} from "reactstrap";


export default class FoodList extends Component {
    render() {
        return (
            <div>
                <MenuConsumer>
                   {(value) => {
                       return value.foods.map(food=> { 
                           return <Food key={food.id} food={food}></Food>;
                       })
                   }}
                   
    
                </MenuConsumer>
               
            </div>
        )
    }
}
