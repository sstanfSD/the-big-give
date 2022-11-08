import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  FooterElement,
  Container,
  Column,
  LogoContainer,
  List,
  Item,
  ListHeading,
  ListLink,
} from "./FooterElements"

import { BtnPrimary } from "../../Buttons/"

import logowhite from "../../../assets/logos/logo-white.png"

const Footer = ({ toggleModal }) => {
  return (
    <FooterElement>
      <Container>
        <Column>
          <LogoContainer>
            <Link to="/">
              <StaticImage
                src="../../../assets/logos/logo-white.png"
                alt="The Big Give logo in white."
              />
            </Link>
          </LogoContainer>
        </Column>
        <Column>
          <List>
            <Item>
              <Link to={"/about"}>
                <ListHeading>about</ListHeading>
              </Link>
            </Item>
            <Item>
              <ListLink to={"/participating-churches"}>
                participating churches
              </ListLink>
            </Item>
            <Item>
              <ListLink to={"/about#history"}>history</ListLink>
            </Item>
            <Item>
              <ListLink to={"/about#team"}>team</ListLink>
            </Item>
            <Item>
              <ListLink to={"/big-stories"}>big stories</ListLink>
            </Item>
          </List>
        </Column>
        <Column>
          <List>
            <Item>
              <Link to={"/get-involved"}>
                <ListHeading>get involved</ListHeading>
              </Link>
            </Item>
            <Item>
              <ListLink to={"/get-involved#resources"}>resources</ListLink>
            </Item>
            <Item>
              <ListLink to={"/about#events"}>events</ListLink>
            </Item>
            <Item>
              <ListLink to={"/become-a-regional-champion"}>
                become a regional champion
              </ListLink>
            </Item>
            <Item>
              <ListLink to={"/the-big-give-agreement"}>
                the big give agreement
              </ListLink>
            </Item>
            <Item>
              <ListLink to={"/statement-of-faith"}>statement of faith</ListLink>
            </Item>
          </List>
        </Column>
        <Column>
          <List>
            <Item>
              <Link to={"/about#contact"}>
                <ListHeading>contact</ListHeading>
              </Link>
            </Item>
            <Item>
              <p>Kathy Blakely</p>
            </Item>
            <Item>
              <a href="tel:6132822015">613-282-2015</a>
            </Item>
            <Item>
              <a href="mailto:kathy@thebiggive.ca">kathy@thebiggive.ca</a>
            </Item>
          </List>
        </Column>
        <Column>
          <BtnPrimary toggle={toggleModal} text={"register your church"} />
        </Column>
      </Container>
    </FooterElement>
  )
}

export default Footer
