import React, { useState, useEffect, useRef } from "react"

import {
  Section,
  Container,
  TextContainer,
  VideoRef,
  Heading,
  Body,
  VideosWrapper,
  VideosContainer,
  VideoContainer,
  VideoThumbnail,
  VideoOverlay,
  VideoTitle,
} from "./VideoElements"

const Videos = ({ videos }) => {
  const videosRef = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollHandler = () => {
    console.log(Math.round(videosRef.current.getBoundingClientRect().y))

    setScrollPosition(Math.round(videosRef.current.getBoundingClientRect().y))
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true)
    return () => {
      window.removeEventListener("scroll", scrollHandler, true)
    }
  }, [])

  return (
    <Section>
      <Container height={videos.nodes.length}>
        <TextContainer>
          <Heading>Video testimonials</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </Body>
        </TextContainer>
        <VideoRef ref={videosRef} />
        <VideosWrapper>
          <VideosContainer
            length={`${videos.nodes.length / 2}`}
            scrollPosition={scrollPosition}
          >
            {videos.nodes.map((video, i) => {
              return (
                <VideoContainer key={i}>
                  <VideoThumbnail
                    image={
                      video.video.videoThumbnail.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={video.video.videoThumbnail.altText}
                  />
                  <VideoOverlay>
                    <VideoTitle>{video.title}</VideoTitle>
                  </VideoOverlay>
                </VideoContainer>
              )
            })}
          </VideosContainer>
        </VideosWrapper>
      </Container>
    </Section>
  )
}

export default Videos
