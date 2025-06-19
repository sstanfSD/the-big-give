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

import { BtnPrimary, BtnPrimaryBlue, BtnPrimaryExternal } from "../../Buttons"
import MobileMenu from "../MobileMenu"

const Navbar = ({ toggleModal }) => {
  const [openMobile, setOpenMobile] = useState(false)
  const openMobileMenu = () => {
    setOpenMobile(!openMobile)
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
            <Dropdown>
              <DropdownItem>
                <InternalLink to="/big-stories#videos">
                  video testimonials
                </InternalLink>
              </DropdownItem>
            </Dropdown>
          </Item>
          <Item>
            <BtnPrimary toggle={toggleModal} text={"register"} />
            {/* <BtnPrimaryExternal
              to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
              text={"register"}
            /> */}
          </Item>
        </List>
        <MobileMenuBtn onClick={openMobileMenu} openMobile={openMobile}>
          <div openMobile={openMobile} />
          <div openMobile={openMobile} />
          <div openMobile={openMobile} />
        </MobileMenuBtn>
      </Container>
      <MobileMenu
        openMobile={openMobile}
        toggle={openMobileMenu}
        toggleModal={toggleModal}
      />
    </Nav>
  )
}

export default Navbar
