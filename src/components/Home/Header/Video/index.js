import React, { useState } from "react"
import {
  VideoElement,
  VideoIframe,
  VideoContainer,
  BtnContainer,
  BtnText,
} from "./VideoElements"

import BtnBg from "../../../SVG/BtnBg"
import { useTranslation } from "gatsby-plugin-react-i18next"


const Video = () => {
  const [playFullVideo, setPlayFullVideo] = useState(false)
  const {t} = useTranslation()
  
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
        <BtnText>{t("video.text")}</BtnText>
      </BtnContainer>
      <VideoIframe
        loading="lazy"
        src={t("video.link")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
        playFullVideo={playFullVideo}
      />
    </VideoContainer>
  )
}

export default Video