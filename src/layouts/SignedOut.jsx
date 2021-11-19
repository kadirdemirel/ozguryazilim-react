import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.signIn} primary>
          Login
        </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Register
        </Button>
      </Menu.Item>
    </div>
  );
}
