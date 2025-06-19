import React from "react"

import {
  Section,
  Container,
  TextContainer,
  SliderContainer,
  VideoContainer,
  Video,
} from "./MainElements"

import Slider from "../Slider"

const Main = ({ content, images, video }) => {
  return (
    <Section>
      <Container>
        <TextContainer dangerouslySetInnerHTML={{ __html: content }} />

        {images && (
          <SliderContainer>
            <Slider images={images} />
          </SliderContainer>
        )}

        {video && (
          <VideoContainer>
            <Video
              loading="lazy"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </VideoContainer>
        )}
      </Container>
    </Section>
  )
}

export default Main
