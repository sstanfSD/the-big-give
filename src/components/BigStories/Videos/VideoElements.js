import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section``
export const Container = styled.div`
  padding: 5rem 0;

  position: relative;
  height: calc(${props => props.height} * 36rem);
`

export const TextContainer = styled.div`
  max-width: 60rem;
  padding: 0 5rem;
  color: var(--color-white);

  margin-bottom: 10rem;

  ${media.laptop`
  margin-bottom: 5rem;
  `}

  ${media.phonesmall`
  padding: 0 2.5rem;
  `}
`
export const Heading = styled.h2``
export const Body = styled.p``

export const VideosWrapper = styled.div`
  overflow: hidden;
  position: sticky;
  top: 5rem;

  width: 100%;
`

export const VideoRef = styled.div`
  margin-top: 5rem;
`

export const VideosContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(${props => props.length}, 1fr);
  grid-template-rows: 28.1rem 28.1rem;

  grid-auto-flow: row;
  gap: 5rem;

  will-change: transform;

  transform: translateX(calc(${props => props.scrollPosition}rem / 8));

  ${media.tabport`
  grid-template-rows: 16.9rem 16.9rem;
  `}

  ${media.phone`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  transform: translateX(0);
  justify-items: center;

  padding: 0 2.5rem;
  `}
`

export const VideoContainer = styled.div`
  cursor: pointer;

  position: relative;

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
