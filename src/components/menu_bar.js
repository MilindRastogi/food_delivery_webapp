import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Example2 = (props) => {
  return (
    <div style={{ backgroundColor: "blue" }} className="sticky">
      <Nav>
        <NavItem>
          <NavLink href="/veg/" style={{ color: "yellow" }}>
            Veg
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Non-veg/" style={{ color: "yellow" }}>
            Non-Veg
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="Desserts" style={{ color: "yellow" }}>
            Desserts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="Drinks" style={{ color: "yellow" }}>
            Drinks
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Example2;
