import React, { useState } from "react"

import {
  VideoContainer,
  VideoThumbnail,
  VideoOverlay,
  VideoTitle,
} from "./ThumbnailElements"
import VideoModal from "../VideoModal"

const Thumbnail = ({ image, alt, title }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
      {" "}
      <VideoContainer onClick={toggle}>
        <VideoThumbnail image={image} alt={alt} />
        <VideoOverlay>
          <VideoTitle>{title}</VideoTitle>
        </VideoOverlay>
      </VideoContainer>
    </>
  )
}

export default Thumbnail
