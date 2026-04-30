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
import { extractYouTubeId } from "../../../utils/youtube"

const Main = ({ content, images, video }) => {
  const videoId = video ? extractYouTubeId(video) : ""
  return (
    <Section>
      <Container>
        <TextContainer dangerouslySetInnerHTML={{ __html: content }} />

        {images && (
          <SliderContainer>
            <Slider images={images} />
          </SliderContainer>
        )}

        {videoId && (
          <VideoContainer>
            <Video
              loading="lazy"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        )}
      </Container>
    </Section>
  )
}

export default Main
