import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Example2 = (props) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Nav>
        <NavItem>
          <NavLink href="#" style={{ color: "yellow" }}>
            Veg
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "yellow" }}>
            Non-Veg
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "yellow" }}>
            Desserts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "yellow" }}>
            Drinks
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Example2;
