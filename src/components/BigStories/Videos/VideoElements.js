import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  position: relative;
`
export const Container = styled.div`
  padding: 5rem 0;

  height: calc(${props => props.height} * 36rem);

  ${media.phone`
    height: 100%;
  `}
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
