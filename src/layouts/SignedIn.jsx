import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {

  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEXsy7Gb3PMgw/profile-displayphoto-shrink_200_200/0/1631795920774?e=1642636800&v=beta&t=EKWA4XhYG5UmMdpf_GiMtqMZkEJNfR1GrpYv4MO9AYg"
        />
        <Dropdown pointing="top left" text="Kadir Demirel">
          <Dropdown.Menu>
            <Dropdown.Item text="Profile" icon="info"></Dropdown.Item>
            <Dropdown.Item
              onClick={signOut}
              text="Exit"
              icon="sign-out"
            ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
