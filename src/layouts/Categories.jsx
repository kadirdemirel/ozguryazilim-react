import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="Home"
        
        />
        <Menu.Item
          name="Products"
         
        />
        <Menu.Item
          name="Friends"
        />
      </Menu>
    </div>
  );
}
