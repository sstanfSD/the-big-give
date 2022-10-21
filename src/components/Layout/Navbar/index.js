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

const Navbar = ({ toggle }) => {
  console.log(toggle)

  const [open, setOpen] = useState(false)
  const openMobileMenu = () => {
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
            <InternalLink to="/about">about</InternalLink>
            <Dropdown>
              <DropdownItem>
                <InternalLink to="/about#history">history</InternalLink>
              </DropdownItem>
              <DropdownItem>
                <InternalLink to="/about#team">team</InternalLink>
              </DropdownItem>
              <DropdownItem>
                <InternalLink to="/about#contact">contact</InternalLink>
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
            <Dropdown>
              <DropdownItem>
                <InternalLink to="/get-involved#resources">
                  resources
                </InternalLink>
              </DropdownItem>
              <DropdownItem>
                <InternalLink to="/get-involved#events">events</InternalLink>
              </DropdownItem>
            </Dropdown>
          </Item>
          <Item>
            <InternalLink to="/big-stories">big stories</InternalLink>
          </Item>
          <Item>
            <BtnPrimary toggle={toggle} text={"register"} />
          </Item>
        </List>
        <MobileMenuBtn onClick={openMobileMenu} open={open}>
          <div open={open} />
          <div open={open} />
          <div open={open} />
        </MobileMenuBtn>
      </Container>
      <MobileMenu open={open} toggle={openMobileMenu} />
    </Nav>
  )
}

export default Navbar
