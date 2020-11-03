
import React, { Component } from "react";
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
//import image1 from "C:/Users/ASUS/Desktop/react_food/src/images/burger.jpg";
class Example3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card style={{borderRadius: "20px",}}>
          <CardImg src={image1}alt="Card image cap" style={{borderRadius: "20px",}}/>
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardSubtitle>{this.props.dish.Description}</CardSubtitle>
            <CardText>Price : {this.props.dish.price}</CardText>
            <Button onClick={() =>{console.log("Added to Cart")}}>Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Example3;
