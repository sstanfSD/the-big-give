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

const About = ({ date }) => {
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
          <Heading>Join a national movement of generosity</Heading>
          <Body>
            Each year, churches across Canada bless and love their
            neighbourhoods through a day of giving extravagantly where
            EVERYTHING IS FREE!
            <br />
            <br /> The Big Give is run by volunteers who are fueled by a passion
            to love their communities and draw them into relationship with
            Jesus. Join us on {date} and see what happens in your town.
          </Body>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default About
