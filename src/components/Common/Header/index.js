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
  ImageContainer,
  TopRow,
  BottomRow,
} from "./HeaderElements"

import { BtnPrimary, BtnPrimaryBlue } from "../../Buttons"

import bg from "../../../assets/images/about/header/text-bg-png.png"

const Header = ({ header, toggle }) => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <TextBg>
            <img src={bg} alt="white background image" />
          </TextBg>
          <TextContent>
            <Heading>{header.heading}</Heading>
            <Body>{header.body}</Body>
            {header.redButton && (
              <BtnPrimary text={header.redButtonText} toggle={toggle} />
            )}

            {header.blueButton && (
              <BtnPrimaryBlue
                to={header.blueButtonLink}
                text={header.blueButtonText}
              />
            )}
          </TextContent>
        </TextContainer>
        <ImageContainer>
          <TopRow>
            <GatsbyImage
              image={header.images[0].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[0].altText}
            />
            <GatsbyImage
              image={header.images[1].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[1].altText}
            />
          </TopRow>

          <BottomRow>
            <GatsbyImage
              image={header.images[2].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[2].altText}
            />
            <GatsbyImage
              image={header.images[3].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[3].altText}
            />
          </BottomRow>
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default Header
