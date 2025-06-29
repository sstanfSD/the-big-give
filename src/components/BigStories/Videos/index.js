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

import Thumbnail from "./Thumbnail"
import VideoModal from "./VideoModal"

const Videos = ({ videos }) => {
  //PLAY ACTIVE VIDEO
  const [activeVideo, setActiveVideo] = useState(-1)
  const playVideo = i => {
    setActiveVideo(i)
  }

  const closeVideo = () => {
    setActiveVideo(-1)
  }

  // SCROLL ANIMATION
  const videosRef = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollHandler = () => {
    setScrollPosition(Math.round(videosRef.current.getBoundingClientRect().y))
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true)
    return () => {
      window.removeEventListener("scroll", scrollHandler, true)
    }
  }, [])

  return (
    <Section id="videos">
      <Container height={videos.nodes.length}>
        <TextContainer>
          <Heading>Video testimonials</Heading>
          <Body>
            See some of our favourite people and hear the stories from past Big
            Give events.
          </Body>
        </TextContainer>
        <VideoRef ref={videosRef} />
        <VideosWrapper>
          <VideosContainer
            length={Math.ceil(videos.nodes.length / 2)}
            scrollPosition={scrollPosition}
          >
            {videos.nodes.map((video, i) => {
              return (
                // <VideoContainer key={i}>
                //   <VideoThumbnail
                //     image={
                //       video.video.videoThumbnail.localFile.childImageSharp
                //         .gatsbyImageData
                //     }
                //     alt={video.video.videoThumbnail.altText}
                //   />
                //   <VideoOverlay>
                //     <VideoTitle>{video.title}</VideoTitle>
                //   </VideoOverlay>
                // </VideoContainer>
                <div
                  onClick={() => {
                    playVideo(i)
                  }}
                >
                  <Thumbnail
                    key={i}
                    image={
                      video.video.videoThumbnail.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={video.video.videoThumbnail.altTex}
                    title={video.title}
                  />
                </div>
              )
            })}
          </VideosContainer>
        </VideosWrapper>
      </Container>
      {videos.nodes.map((video, i) => {
        return (
          <VideoModal
            key={i}
            index={i}
            activeVideo={activeVideo}
            closeVideo={closeVideo}
            video={video.video.videoEmbedCode}
          />
        )
      })}
    </Section>
  )
}

export default Videos
