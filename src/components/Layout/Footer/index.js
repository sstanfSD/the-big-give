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

import { BtnPrimaryExternal } from "../../Buttons/"

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
              <ListHeading to={"/about"}>about</ListHeading>
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
              <ListHeading to={"/get-involved"}>get involved</ListHeading>
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
              <ListHeading to={"/about#contact"}>contact</ListHeading>
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
          <BtnPrimaryExternal
            text={"register your church"}
            to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
          />
        </Column>
      </Container>
    </FooterElement>
  )
}

export default Footer
