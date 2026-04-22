import React, { useState } from "react"

import {
  Container,
  VideoWrapper,
  VideoContainer,
  VideoIframe,
} from "./VideoModalElements"

const VideoModal = ({ video, activeVideo, index, closeVideo }) => {
  const videoId = video.split(/[?&#]/)[0]
  return (
    <>
      {activeVideo > -1 && (
        <Container index={index} activeVideo={activeVideo} onClick={closeVideo}>
          <VideoWrapper>
            <VideoContainer>
              <VideoIframe
                loading="lazy"
                src={`https://www.youtube.com/embed/${videoId}&enablejsapi=1&origin=https%3A%2F%2Fthebiggive.ca`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
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
