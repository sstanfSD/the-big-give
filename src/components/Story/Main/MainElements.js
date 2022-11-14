import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
`
export const Container = styled.div`
  padding: 5rem 2.5rem 10rem;
  margin: 0 auto;
  max-width: 75rem;
`
export const TextContainer = styled.div`
  & p {
    font-size: var(--font-size-bodyS);
    margin: 1.6rem 0;
  }

  & a {
    color: var(--color-black);
    text-decoration: underline;
  }

  & ul {
    font-size: var(--font-size-bodyS);
    margin: 1.6rem 0;
    list-style: none;

    & li {
      margin-left: 2rem;
    }
  }

  margin-bottom: 7.5rem;

  ${media.phone`
  margin-bottom: 2.5rem;
  `}
`
export const SliderContainer = styled.div`
  & .gatsby-image-wrapper {
    margin: 0 auto;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;

  padding-bottom: 56.25%;
  overflow: hidden;
`
export const Video = styled.iframe`
  position: absolute;
  border: none;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;

  &::-webkit-media-controls-start-playback-button {
    opacity: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    display: none !important;
    -webkit-appearance: none !important;
  }
`
