import React, { useState } from "react"
import {
  VideoElement,
  VideoIframe,
  VideoContainer,
  BtnContainer,
  BtnText,
} from "./VideoElements"

import BtnBg from "../../../SVG/BtnBg"

const Video = () => {
  const [playFullVideo, setPlayFullVideo] = useState(false)
  const toggle = () => {
    setPlayFullVideo(true)
  }

  return (
    <VideoContainer playFullVideo={playFullVideo}>
      <VideoElement
        className="video-player"
        loop
        muted
        playsInline
        autoPlay
        disablePictureInPicture={true}
        src="https://player.vimeo.com/progressive_redirect/playback/762479967/rendition/720p/file.mp4?loc=external&signature=ae80737bd337ea23c77dbdbde12d49603c40bd396936d5976ff7954e0ff6e1d9"
        type="video/mp4"
        playFullVideo={playFullVideo}
      />
      <BtnContainer onClick={toggle} playFullVideo={playFullVideo}>
        <BtnBg />
        <BtnText>See Full Video</BtnText>
      </BtnContainer>
      <VideoIframe
        loading="lazy"
        src="https://www.youtube.com/embed/prLc2d1yK4I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        playFullVideo={playFullVideo}
      />
    </VideoContainer>
  )
}

export default Video
