import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import {
  Section,
  Container,
  ImageContainer,
  DesktopImage,
  MobileImage,
  ImageFilter,
  TextContainer,
  Heading,
  Body,
} from "./AboutElements"

import bg from "../../../assets/images/home-about/about-bg.jpg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const About = ({ date }) => {

  const {t} = useTranslation()

  return (
    <Section>
      <Container>
        <ImageContainer>
          <DesktopImage>
            <StaticImage
              src={"../../../assets/images/home-about/about-bg.jpg"}
              alt="A collage of photos from Big Gives."
              objectPosition={"50% 0%"}
            />
          </DesktopImage>
          <MobileImage>
            <StaticImage
              src={"../../../assets/images/home-about/about-bg-mobile.jpg"}
              alt="A collage of photos from Big Gives."
              objectPosition={"0% 0%"}
            />
          </MobileImage>
        </ImageContainer>
        <ImageFilter />
        <TextContainer>
          <Heading>{t("section.title")}</Heading>
          <Body>
            {t("section.desc1")}
            <br />
            <br /> {t("section.desc2")} {t("section.desc3")}.
          </Body>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default About