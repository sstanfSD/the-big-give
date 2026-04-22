import React, { useState } from "react"

import {
  Container,
  VideoWrapper,
  VideoContainer,
  VideoIframe,
} from "./VideoModalElements"

const VideoModal = ({ video, activeVideo, index, closeVideo }) => {
  return (
    <>
      {activeVideo > -1 && (
        <Container index={index} activeVideo={activeVideo} onClick={closeVideo}>
          <VideoWrapper>
            <VideoContainer>
              <VideoIframe
                loading="lazy"
                src={`https://www.youtube-nocookie.com/embed/${video}?rel=0`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                index={index}
                activeVideo={activeVideo}
              />
            </VideoContainer>
          </VideoWrapper>
        </Container>
      )}
    </>
  )
}

export default VideoModal
