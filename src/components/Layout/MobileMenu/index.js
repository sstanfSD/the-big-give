import React from "react"

import {
  Nav,
  List,
  Item,
  InternalLink,
  SecondaryList,
  SecondaryItem,
} from "./MobileMenuElements"

import { BtnPrimary } from "../../Buttons"

const MobileMenu = ({ openMobile, toggle, toggleModal }) => {
  return (
    <Nav openMobile={openMobile}>
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
              <InternalLink to="/about#history" onClick={toggle}>
                history
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink to="/about#team" onClick={toggle}>
                team
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink to="/about#contact" onClick={toggle}>
                contact
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/participating-churches" onClick={toggle}>
            participating churches
          </InternalLink>
        </Item>
        <Item>
          <InternalLink to="/get-involved" onClick={toggle}>
            get involved
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/get-involved#resources" onClick={toggle}>
                resources
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink to="/get-involved#events" onClick={toggle}>
                events
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/big-stories" onClick={toggle}>
            big stories
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/big-stories#videos" onClick={toggle}>
                video testimonials
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <BtnPrimary text="register your church" toggle={toggleModal} />
        </Item>
      </List>
    </Nav>
  )
}

export default MobileMenu
