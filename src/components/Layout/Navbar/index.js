import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Nav,
  LogoContainer,
  List,
  Item,
  InternalLink,
  Dropdown,
  DropdownItem,
} from "./NavbarElements"

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>Logo</LogoContainer>
      <List>
        <Item>
          <InternalLink to="/">InternalLink</InternalLink>
          <Dropdown>
            <DropdownItem>
              <InternalLink to="/">InternalLink</InternalLink>
              <InternalLink to="/">InternalLink</InternalLink>
            </DropdownItem>
          </Dropdown>
        </Item>
        <Item>
          <InternalLink to="/">InternalLink</InternalLink>
        </Item>
        <Item>
          <InternalLink to="/">InternalLink</InternalLink>
        </Item>
      </List>
    </Nav>
  )
}

export default Navbar
