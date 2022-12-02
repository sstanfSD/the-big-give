import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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
} from "./BigStoriesElements"

import { BtnPrimaryLink } from "../../Buttons"

import bg from "../../../assets/images/about/header/text-bg-png.png"

const Header = ({ header, toggle }) => {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <TopRow>
            <StaticImage
              src="../../../assets/images/home/playground.jpeg"
              alt="Bouncy playground slide at Big Give event."
            />
            <StaticImage
              src="../../../assets/images/home/group-hang.jpeg"
              alt="Group hangout at Big Give event."
            />
          </TopRow>

          <BottomRow>
            <StaticImage
              src="../../../assets/images/home/nail-painting.jpeg"
              alt="Free nail painting at Big Give event."
            />
            <StaticImage
              src="../../../assets/images/home/smiling-man.jpeg"
              alt="Smiling man at Big Give event."
            />
          </BottomRow>
        </ImageContainer>
        <TextContainer>
          <TextBg>
            <img src={bg} alt="white background image" />
          </TextBg>
          <TextContent>
            <Heading>Big Stories</Heading>
            <Body>
              <p>
                Testimonies are what fuel the volunteers who run The Big Give.
                Here are some of our favourite stories from previous Big Gives.
                Register your church today and creating your own testimonies of
                God’s goodness in your community.
              </p>
            </Body>

            <BtnPrimaryLink
              text={"Read big stories"}
              to={"/big-stories#stories"}
            />
          </TextContent>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default Header
