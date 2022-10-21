import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
`
export const Container = styled.div`
  max-width: var(--max-width);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15rem 5rem;
  margin: 0 auto;

  ${media.phone`
  padding: 15rem 2.5rem;
`}

  ${media.phonesmall`
  padding: 10rem 2.5rem;
`}
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;

  height: 100%;
  width: 100%;

  & .gatsby-image-wrapper {
    height: 100%;
  }
`

export const DesktopImage = styled.div`
  height: 100%;
  width: 100%;

  & .gatsby-image-wrapper {
    height: 100%;
  }

  ${media.tabport`
display:none;
`}
`

export const MobileImage = styled.div`
  display: none;

  height: 100%;
  width: 100%;

  & .gatsby-image-wrapper {
    height: 100%;
  }

  & img {
    object-position: 50% 0%;
  }

  ${media.tabport`
display: block;
`}
`

export const ImageFilter = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;

  height: 100%;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.7);
`

export const TextContainer = styled.div`
  position: relative;
  z-index: 3;

  text-align: center;

  max-width: 90rem;
`
export const Heading = styled.h2``
export const Body = styled.p``
