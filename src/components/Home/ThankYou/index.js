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

import { BtnPrimary } from "../../Buttons"

const ThankYou = ({ thankyou, toggle }) => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>Thank You</Heading>
          <Body>
            For more information on The Big Give, please contact Director,{" "}
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
          <BtnPrimary toggle={toggle} text={"register now"} large />
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
