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

import { BtnPrimaryExternal, BtnPrimary } from "../../Buttons/"
import {useTranslation} from "gatsby-plugin-react-i18next"

import logowhite from "../../../assets/logos/logo-white.png"

const Footer = ({ toggleModal }) => {

  const {t} = useTranslation()

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
              <ListHeading to={"/about"}>{t('footer.about')}</ListHeading>
            </Item>
            <Item>
              <ListLink to={"/participating-churches"}>
                {t("footer.churches")}
              </ListLink>
            </Item>
            <Item>
              <ListLink to={"/about#history"}>{t("footer.history")}</ListLink>
            </Item>
            <Item>
              <ListLink to={"/about#team"}>{t("footer.team")}</ListLink>
            </Item>
            <Item>
              <ListLink to={"/big-stories"}>{t("footer.bigStories")}</ListLink>
            </Item>
          </List>
        </Column>
        <Column>
          <List>
            <Item>
              <ListHeading to={"/get-involved"}>{t("footer.getInvolved")}</ListHeading>
            </Item>
            <Item>
              <ListLink to={"/get-involved#resources"}>{t("footer.resources")}</ListLink>
            </Item>
            <Item>
              <ListLink to={"/about#events"}>{t("footer.events")}</ListLink>
            </Item>
            <Item>
              <ListLink to={"/become-a-regional-champion"}>
                {t("footer.becomeChampion")}
              </ListLink>
            </Item>
            <Item>
              <ListLink to={"/the-big-give-agreement"}>
                {t("footer.agreement")}
              </ListLink>
            </Item>
            <Item>
              <ListLink to={"/statement-of-faith"}>{t("footer.statementOfFaith")}</ListLink>
            </Item>
          </List>
        </Column>
        <Column>
          <List>
            <Item>
              <ListHeading to={"/about#contact"}>{t("nav.contact")}</ListHeading>
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
          {/* <BtnPrimary text={"register your church"} toggle={toggleModal} /> */}

          <BtnPrimaryExternal
            text={t('footer.cta')}
            to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
          />
        </Column>
      </Container>
    </FooterElement>
  )
}

export default Footer
