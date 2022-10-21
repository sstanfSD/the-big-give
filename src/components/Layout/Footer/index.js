import React from "react"
import { Link } from "gatsby"

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

const Footer = ({ toggle }) => {
  return (
    <FooterElement>
      <Container>
        <Column>
          <LogoContainer>LOGO</LogoContainer>
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
              <ListLink to={"/about#serve"}>serve</ListLink>
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
          </List>
        </Column>
        <Column>
          <BtnPrimary toggle={toggle} text={"register your church"} />
        </Column>
      </Container>
    </FooterElement>
  )
}

export default Footer
