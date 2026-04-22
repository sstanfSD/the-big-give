import React from "react"

import {
  Nav,
  List,
  Item,
  InternalLink,
  SecondaryList,
  SecondaryItem,
} from "./MobileMenuElements"

import { BtnPrimaryExternal } from "../../Buttons"
import {useTranslation} from "gatsby-plugin-react-i18next"
import { REGIONS } from "../../../constants/regions"

const MobileMenu = ({ openMobile, toggle, toggleModal }) => {

  const {t} = useTranslation()
    
  return (
    <Nav openMobile={openMobile}>
      <List>
        <Item>
          <InternalLink to="/" onClick={toggle}>
            {t("nav.home")}
          </InternalLink>
        </Item>
        <Item>
          <InternalLink to="/about" onClick={toggle}>
            {t("nav.about")}
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/about#history" onClick={toggle}>
                {t("nav.history")}
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink to="/about#team" onClick={toggle}>
                {t("nav.team")}
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink to="/about#contact" onClick={toggle}>
                {t("nav.contact")}
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/participating-churches" onClick={toggle}>
            {t("nav.churches")}
          </InternalLink>
          <SecondaryList>
            {REGIONS.map(({ slug, name }) => (
              <SecondaryItem key={slug}>
                <InternalLink to={`/participating-churches?region=${slug}`} onClick={toggle}>
                  {name}
                </InternalLink>
              </SecondaryItem>
            ))}
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/get-involved" onClick={toggle}>
            {t("nav.getInvolved")}
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/get-involved#resources" onClick={toggle}>
                {t("nav.resources")}
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink to="/get-involved#events" onClick={toggle}>
                {t("nav.events")}
              </InternalLink>
            </SecondaryItem>
            <SecondaryItem>
              <InternalLink as="a" href="https://gilkssportspromo.square.site/shop/big-give/VEOY6PHL2QPIM6RRC2NQQWGR" target="_blank" rel="noopener noreferrer">
                {t("nav.merchandise")}
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <InternalLink to="/big-stories" onClick={toggle}>
            {t("nav.stories")}
          </InternalLink>
          <SecondaryList>
            <SecondaryItem>
              <InternalLink to="/big-stories#videos" onClick={toggle}>
                {t("nav.videos")}
              </InternalLink>
            </SecondaryItem>
          </SecondaryList>
        </Item>
        <Item>
          <BtnPrimaryExternal text={t("mobile.church")} to="https://wl.donorperfect.net/weblink/weblink.aspx?name=E343462QE&id=182" />
        </Item>
      </List>
    </Nav>
  )
}

export default MobileMenu