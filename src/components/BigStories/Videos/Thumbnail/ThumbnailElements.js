import styled from "styled-components"
import { media } from "../../../../../media"
import { GatsbyImage } from "gatsby-plugin-image"

export const VideoContainer = styled.div`
  cursor: pointer;

  position: relative;

  height: 28.1rem;
  width: 46.9rem;

  ${media.tabport`
  width: 30rem;
  height: 16.9rem;
  `}

  ${media.phone`
  width: 40rem;
  height: 22.5rem;
  `}

  ${media.phonesmall`
  width: 28rem;
  height: 15.6rem;
  `}

  &:nth-child(even) {
    /* transform: translateX(20rem); */
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
`
export const VideoThumbnail = styled(GatsbyImage)``
export const VideoOverlay = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
`
export const VideoTitle = styled.h3`
  color: var(--color-white);
  font-size: var(--font-size-bodyS);
`
