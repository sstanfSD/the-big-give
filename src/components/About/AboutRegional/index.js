import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  Section,
  Container,
  TextContainer,
  Heading,
  Body,
  BtnContainer,
  Top,
  Bottom,
  Btn,
  ImageContainer,
  ImageTop,
  ImageBottom,
} from "./AboutRegionalElements"

import { BtnPrimaryExternal, BtnPrimary } from "../../Buttons"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AboutRegional = ({ toggle }) => {

  const {t} = useTranslation()

  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>
            {t("about.quote.highlight")}
          </Heading>
          <Body>
            {t("about.description.paragraph1")}
            <br />
            <br /> {t("about.description.paragraph2")}
          </Body>
          <BtnContainer>
            <BtnPrimaryExternal
              text={t("footer.cta")}
              to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
              large
            />
            {/* <BtnPrimary text="Register your church" toggle={toggle} large /> */}
          </BtnContainer>
        </TextContainer>
        <ImageContainer>
          <ImageTop>
            <StaticImage
              src="../../../assets/images/about/regional-about/about-image-top.jpg"
              alt="top"
            />
          </ImageTop>
          <ImageBottom>
            {" "}
            <StaticImage
              src="../../../assets/images/about/regional-about/about-image-bottom.jpg"
              alt="top"
            />
          </ImageBottom>
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default AboutRegional
