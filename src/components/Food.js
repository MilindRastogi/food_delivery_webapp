import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { MenuConsumer } from "../context";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import image1 from "../images/burger.jpg";

export default class Food extends Component {
    render() {
        const { id ,name , Description, price ,inCart} = this.props.food
        return (<div className="menu_card">
              <Card className="card1"
              style={{borderRadius: "20px"}} >
                <CardImg src={image1} alt="Card image cap" style={{borderRadius: "20px",}}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{Description}</CardSubtitle>
                    <CardText>Price : {price}</CardText>
                    <MenuConsumer>{
                        value =>{
                            return(
                       <Button className="cart-btn"
                    disabled={inCart ? true : false} onClick={
                        () =>{value.addToCart(id); 
                    }}>
                    {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                        Added to Cart
                      </p>
                    ) : (
                        <p>Add to Cart</p>
                        )}
                    </Button>
                            )
                        }}

                    
                        </MenuConsumer>
                </CardBody>
                </Card>
               </div>
        )
    }
}
