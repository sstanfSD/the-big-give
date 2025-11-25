import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Nav, Container, LogoContainer, List, Item, InternalLink, Dropdown, DropdownItem, MobileMenuBtn,
  ActionsRight, // <-- import this
} from "./NavbarElements";
import { BtnPrimaryExternal } from "../../Buttons";
import MobileMenu from "../MobileMenu";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const Navbar = ({ toggleModal }) => {
  const [openMobile, setOpenMobile] = React.useState(false);
  const { t } = useTranslation();
  const { originalPath, language } = useI18next();
  const nextLang = language === "en" ? "fr" : "en";

  return (
    <Nav>
      <Container>
        <LogoContainer>
          <Link to="/">
            <StaticImage
              src="../../../assets/logos/main-logo.png"
              alt={t("logo.alt", "The Big Give logo")}
            />
          </Link>
        </LogoContainer>

        {/* DESKTOP NAV */}
        <List>
          <Item>
            <InternalLink as={Link} to="/about">{t("nav.about")}</InternalLink>
            <Dropdown>
              <DropdownItem>
                <InternalLink as={Link} to="/about#history">{t("nav.history")}</InternalLink>
              </DropdownItem>
              <DropdownItem>
                <InternalLink as={Link} to="/about#team">{t("nav.team")}</InternalLink>
              </DropdownItem>
              <DropdownItem>
                <InternalLink as={Link} to="/about#contact">{t("nav.contact")}</InternalLink>
              </DropdownItem>
            </Dropdown>
          </Item>

          <Item>
            <InternalLink as={Link} to="/participating-churches">{t("nav.churches")}</InternalLink>
          </Item>

          <Item>
            <InternalLink as={Link} to="/get-involved">{t("nav.getInvolved")}</InternalLink>
            <Dropdown>
              <DropdownItem>
                <InternalLink as={Link} to="/get-involved#resources">{t("nav.resources")}</InternalLink>
              </DropdownItem>
              <DropdownItem>
                <InternalLink as={Link} to="/get-involved#events">{t("nav.events")}</InternalLink>
              </DropdownItem>
            </Dropdown>
          </Item>

          <Item>
            <InternalLink as={Link} to="/big-stories">{t("nav.stories")}</InternalLink>
            <Dropdown>
              <DropdownItem>
                <InternalLink as={Link} to="/big-stories#videos">{t("nav.videos")}</InternalLink>
              </DropdownItem>
            </Dropdown>
          </Item>

          <Item>
            <BtnPrimaryExternal
              to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
              text={t("nav.register")}
            />
          </Item>

          {/* Desktop language switch */}
          <Item className="lang-desktop">
            <Link
              to={originalPath}
              language={nextLang}
              style={{ color:"#000", padding:"8px 16px", borderRadius:"4px", cursor:"pointer", fontWeight:"bold", fontSize:"14px", textDecoration:"none", display:"inline-block" }}
            >
              {language === "en" ? "FR" : "EN"}
            </Link>
          </Item>
        </List>

        {/* MOBILE: place language switch and hamburger SIDE BY SIDE */}
        <ActionsRight>
          <Link
            to={originalPath}
            language={nextLang}
            style={{ color:"#000", padding:"8px 12px", borderRadius:"4px", cursor:"pointer", fontWeight:"bold", fontSize:"18px", textDecoration:"none", display:"inline-block" }}
          >
            {language === "en" ? "FR" : "EN"}
          </Link>

          <MobileMenuBtn onClick={() => setOpenMobile(!openMobile)} openMobile={openMobile}>
            <div openMobile={openMobile} /><div openMobile={openMobile} /><div openMobile={openMobile} />
          </MobileMenuBtn>
        </ActionsRight>
      </Container>

      <MobileMenu openMobile={openMobile} toggle={() => setOpenMobile(!openMobile)} toggleModal={toggleModal} />
    </Nav>
  );
};

export default Navbar;
