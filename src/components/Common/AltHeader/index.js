import React from "react"

import {
  Header,
  Container,
  TextContainer,
  Heading,
  HeadingBg,
} from "./AltHeaderElements"

import headingBg from "../../../assets/images/home/HeadingBgWhite.png"

const AltHeader = ({ heading }) => {
  return (
    <Header>
      <Container>
        <TextContainer>
          <HeadingBg>
            <img src={headingBg} alt="Heading background." />
          </HeadingBg>
          <Heading>{heading}</Heading>
        </TextContainer>
      </Container>
    </Header>
  )
}

export default AltHeader
