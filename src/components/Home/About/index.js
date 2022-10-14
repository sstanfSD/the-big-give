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

const About = () => {
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
          <Heading>about the Big Give</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Body>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default About
