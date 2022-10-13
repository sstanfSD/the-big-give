import React from "react"

import {
  Nav,
  List,
  Item,
  InternalLink,
  SecondaryList,
  SecondaryItem,
} from "./MobileMenuElements"

const MobileMenu = ({ open, toggle }) => {
  return (
    <Nav open={open}>
      <List>
        <Item>
          <InternalLink to="/" onClick={toggle}>
            home
          </InternalLink>
        </Item>
        <Item>
          <InternalLink to="/about" onClick={toggle}>
            about
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/leadership" onClick={toggle}>
                item
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/participating churches" onClick={toggle}>
            participating churches
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/kids-and-youth#kids" onClick={toggle}>
                item
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/get-involved" onClick={toggle}>
            get involved
          </InternalLink>
        </Item>
        <Item>
          <InternalLink to="/past-big-givces" onClick={toggle}>
            past big gives
          </InternalLink>
        </Item>
      </List>
    </Nav>
  )
}

export default MobileMenu
