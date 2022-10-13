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
          <Heading>More about the BIG Give</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br />
            <br />
            <strong>
              Some text about getting involved in your own region.
            </strong>
          </Body>
          <BtnContainer>
            <Top>
              <a>
                <Btn>Ottawa, Ottawa Valley</Btn>
              </a>
              <a>
                <Btn>GTA</Btn>
              </a>
            </Top>
            <Bottom>
              <a>
                <Btn>Quebec</Btn>
              </a>
              <a>
                <Btn>all other communities</Btn>
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
