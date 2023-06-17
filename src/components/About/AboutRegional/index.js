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

const AboutRegional = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>
            “It’s the best outreach event we’ve ever been a part of.”
          </Heading>
          <Body>
            It’s amazing how a free gift can build a bridge into your community.
            And it’s so simple. We’ve seen churches offer free garage sales, car
            washes, BBQs, movies in the park, pony rides and face painting. Some
            churches even provided free haircuts and bouncy castles for kids.
            Whatever you do, make it free.
            <br />
            <br /> Get your church to join with thousands of other Christians
            across the country for a unified day of giving extravagantly on
            Saturday, June 1, 2024. Click on your region below. <br /> <br />{" "}
            Don’t see your area? Talk to us about becoming a regional champion.
          </Body>
          <BtnContainer>
            <Top>
              <a
                href="https://www.eventbrite.com/e/the-big-give-2023-ottawaottawa-valley-registration-383606606687"
                target="_blank"
              >
                <Btn>Ottawa, Ottawa Valley</Btn>
              </a>
              <a
                href="https://www.eventbrite.ca/e/the-big-give-2023-greater-toronto-area-gta-registration-384157394107"
                target="_blank"
              >
                <Btn>GTA</Btn>
              </a>
            </Top>
            <Bottom>
              <a
                href="https://www.eventbrite.ca/e/the-big-give-2023-quebec-registration-384758050687"
                target="_blank"
              >
                <Btn>Quebec</Btn>
              </a>
              <a
                href="https://www.eventbrite.ca/e/the-big-give-2023-all-other-communities-registration-384163642797"
                target="_blank"
              >
                <Btn>All Other Communities</Btn>
              </a>
            </Bottom>
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
