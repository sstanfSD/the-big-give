import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  Nav,
  Container,
  LogoContainer,
  List,
  Item,
  InternalLink,
  Dropdown,
  DropdownItem,
  MobileMenuBtn,
} from "./NavbarElements"

import { BtnPrimary } from "../../Buttons"
import MobileMenu from "../MobileMenu"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Nav>
      <Container>
        <LogoContainer>
          <Link to={"/"}>
            <StaticImage
              src="../../../assets/logos/main-logo.png"
              alt="The big give logo"
            />
          </Link>
        </LogoContainer>

        <List>
          <Item>
            <InternalLink to="/">about</InternalLink>
            <Dropdown>
              <DropdownItem>
                <InternalLink to="/">InternalLink</InternalLink>
                <InternalLink to="/">InternalLink</InternalLink>
              </DropdownItem>
            </Dropdown>
          </Item>
          <Item>
            <InternalLink to="/participating-churches">
              participating churches
            </InternalLink>
          </Item>
          <Item>
            <InternalLink to="/get-involved">get involved</InternalLink>
          </Item>
          <Item>
            <InternalLink to="/big-stories">big stories</InternalLink>
          </Item>
          <Item>
            <BtnPrimary to={"/register"} text={"register"} />
          </Item>
        </List>
        <MobileMenuBtn onClick={toggle} open={open}>
          <div open={open} />
          <div open={open} />
          <div open={open} />
        </MobileMenuBtn>
      </Container>
      <MobileMenu open={open} toggle={toggle} />
    </Nav>
  )
}

export default Navbar
