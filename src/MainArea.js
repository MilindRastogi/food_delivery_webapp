import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Example3 from "./dish_card";

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      dish: [
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
        {
          name: "Burger",
          Description: "Description about food",
          price: 250,
        },
      ],
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
