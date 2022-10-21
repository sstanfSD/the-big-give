import React from "react"
import { VideoElement } from "./VideoElements"

const Video = () => {
  return (
    <VideoElement
      className="video-player"
      loop
      muted
      playsInline
      autoPlay
      disablePictureInPicture={true}
      src="https://player.vimeo.com/progressive_redirect/playback/762479967/rendition/720p/file.mp4?loc=external&signature=ae80737bd337ea23c77dbdbde12d49603c40bd396936d5976ff7954e0ff6e1d9"
      type="video/mp4"
    ></VideoElement>
  )
}

export default Video
