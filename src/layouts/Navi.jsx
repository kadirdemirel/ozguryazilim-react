import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Home" />
          <Menu.Item name="Products" />
          <Menu.Menu position="right">
            <CartSummary />
          </Menu.Menu>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
