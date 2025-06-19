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

const AboutRegional = ({ toggle }) => {
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
            Saturday, June 6, 2026.
          </Body>
          <BtnContainer>
            {/* <BtnPrimaryExternal
              text="Register your church"
              to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
              large
            /> */}
            <BtnPrimary text="Register your church" toggle={toggle} large />
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
