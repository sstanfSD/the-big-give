import React from "react"

import {
  Section,
  Container,
  TextContainer,
  SliderContainer,
} from "./MainElements"

import Slider from "../Slider"

const Main = ({ content, images }) => {
  return (
    <Section>
      <Container>
        <TextContainer dangerouslySetInnerHTML={{ __html: content }} />
        <SliderContainer>
          <Slider images={images} />
        </SliderContainer>
      </Container>
    </Section>
  )
}

export default Main
