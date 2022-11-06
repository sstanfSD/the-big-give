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
          <Heading>{thankyou.heading}</Heading>
          <Body>{thankyou.body}</Body>
          <List>
            {thankyou.storylinks.map((link, i) => {
              return (
                <li>
                  <StoryLink to={`/stories/${link.storySlug}`}>story</StoryLink>
                </li>
              )
            })}
          </List>
          <BtnPrimary toggle={toggle} text={"register for next year"} large />
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
