import React from "react"

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

const Footer = () => {
  return (
    <FooterElement>
      <Container>
        <Column>
          <LogoContainer>LOGO</LogoContainer>
        </Column>
        <Column>
          <List>
            <Item>
              <ListHeading>about</ListHeading>
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
              <ListHeading>get involved</ListHeading>
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
              <ListHeading>contact</ListHeading>
            </Item>
          </List>
        </Column>
        <Column>
          <BtnPrimaryExternal to={"/"} text={"register your church"} />
        </Column>
      </Container>
    </FooterElement>
  )
}

export default Footer
