import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

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
          <SignedOut />
          <SignedIn />
        </Container>
      </Menu>
    </div>
  );
}
