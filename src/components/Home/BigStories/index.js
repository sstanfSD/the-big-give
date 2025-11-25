import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Section,
  Container,
  TextContainer,
  TextBg,
  TextContent,
  Heading,
  Body,
  ImageContainer,
  TopRow,
  BottomRow,
} from "./BigStoriesElements"

import { BtnPrimaryLink } from "../../Buttons"

import bg from "../../../assets/images/about/header/text-bg-png.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Header = ({ header, toggle }) => {

  const {t} = useTranslation()

  return (
    <Section>
      <Container>
        <ImageContainer>
          <TopRow>
            <StaticImage
              src="../../../assets/images/home/playground.jpeg"
              alt="Bouncy playground slide at Big Give event."
            />
            <StaticImage
              src="../../../assets/images/home/group-hang.jpeg"
              alt="Group hangout at Big Give event."
            />
          </TopRow>

          <BottomRow>
            <StaticImage
              src="../../../assets/images/home/nail-painting.jpeg"
              alt="Free nail painting at Big Give event."
            />
            <StaticImage
              src="../../../assets/images/home/smiling-man.jpeg"
              alt="Smiling man at Big Give event."
            />
          </BottomRow>
        </ImageContainer>
        <TextContainer>
          <TextBg>
            <img src={bg} alt="white background image" />
          </TextBg>
          <TextContent>
            <Heading>{t("bigStories.title")}</Heading>
            <Body>
              <p>
                {t("bigStories.desc")}
              </p>
            </Body>

            <BtnPrimaryLink
              text={t("bigStories.cta")}
              to={"/big-stories#stories"}
            />
          </TextContent>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default Header
