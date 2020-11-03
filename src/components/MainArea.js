
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Example3 from "./dish_card";
import {dish} from "../food_data.js"

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      dish
    };
  }
  render() {
    let dishcards = this.state.dish.map((dish) => {
      return (
        <Col
          sm="3"
          style={{
            paddingBottom: "50px",
          }}
        >
          <Example3 dish={dish}></Example3>
        </Col>
      );
    });
    return (
      <Container fluid>
        <Row>{dishcards}</Row>
      </Container>
    );
  }
}
export default MainArea;
