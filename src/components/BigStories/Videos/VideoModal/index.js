import React from "react"

import {
  Container,
  VideoWrapper,
  VideoContainer,
  VideoIframe,
} from "./VideoModalElements"
import { extractYouTubeId } from "../../../../utils/youtube"

const VideoModal = ({ video, activeVideo, index, closeVideo }) => {
  if (activeVideo !== index) return null
  const videoId = extractYouTubeId(video)
  return (
    <Container onClick={closeVideo}>
      <VideoWrapper>
        <VideoContainer>
          <VideoIframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </VideoContainer>
      </VideoWrapper>
    </Container>
  )
}

export default VideoModal
