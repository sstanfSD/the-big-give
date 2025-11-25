import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  Section,
  Container,
  TextContainer,
  Heading,
  Body,
  List,
  StoryLink,
  ImageContainer,
  TopRow,
  BottomRow,
} from "./ThankYouElements"

import { BtnPrimaryExternal, BtnPrimary } from "../../Buttons"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ThankYou = ({ thankyou, toggle }) => {

  const {t} = useTranslation()

  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>{t("finalCta.thankYou")}</Heading>
          <Body>
            {t("finalCta.moreInfo")}{" "}
            <a href="mailto:kathy@thebiggive.ca ">Kathy Blakely</a>.
          </Body>
          <List>
            {thankyou?.storylinks?.map((link, i) => {
              return (
                <li>
                  <StoryLink to={`/stories/${link.storySlug}`}>
                    {link.storyTitle}
                  </StoryLink>
                </li>
              )
            })}
          </List>

          <BtnPrimaryExternal
            text={t("finalCta.registerNow")}
            to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
            large
          />
          {/* <BtnPrimary text="register now" toggle={toggle} large /> */}
        </TextContainer>
        <ImageContainer>
          <TopRow>
            <GatsbyImage
              image={
                thankyou.images[0].localFile.childImageSharp.gatsbyImageData
              }
              alt={thankyou.images[0].altText}
            />
            <GatsbyImage
              image={
                thankyou.images[1].localFile.childImageSharp.gatsbyImageData
              }
              alt={thankyou.images[1].altText}
            />
          </TopRow>
          <BottomRow>
            <GatsbyImage
              image={
                thankyou.images[2].localFile.childImageSharp.gatsbyImageData
              }
              alt={thankyou.images[2].altText}
            />
            <GatsbyImage
              image={
                thankyou.images[3].localFile.childImageSharp.gatsbyImageData
              }
              alt={thankyou.images[3].altText}
            />
          </BottomRow>
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default ThankYou
