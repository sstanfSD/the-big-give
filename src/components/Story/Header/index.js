import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Section,
  Container,
  TextContainer,
  TextBg,
  TextContent,
  Heading,
  Body,
  LocationDate,
  ImageContainer,
  TopRow,
  BottomRow,
} from "./HeaderElements"

import { BtnPrimary, BtnPrimaryBlue } from "../../Buttons"

import bg from "../../../assets/images/about/header/text-bg-png.png"

const Header = ({ img, alt, title, year, location, excerpt }) => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <TextBg>
            <img src={bg} alt="white background image" />
          </TextBg>
          <TextContent>
            <Heading>{title}</Heading>
            <LocationDate>
              {location} | {year}
            </LocationDate>
            <Body dangerouslySetInnerHTML={{ __html: excerpt }} />
          </TextContent>
        </TextContainer>
        <ImageContainer>
          <GatsbyImage image={img} alt={alt} />
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default Header
