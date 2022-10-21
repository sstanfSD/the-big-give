import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section``
export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  height: 90rem;

  padding: 15rem 2.5rem 5rem;

  ${media.tabport`
  height: 80rem;
  `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;

  margin-bottom: 20rem;
`

export const HeadingContainer = styled.div`
  position: relative;

  max-width: 100rem;
  width: 100%;
  text-align: center;

  ${media.laptopsmall`
  max-width: 70rem;
  `}

  ${media.tabport`
  max-width: 60rem;
  `}
`
export const HeadingBg = styled.div`
  position: absolute;

  width: 100%;
  height: 110%;

  padding: 0 2rem;

  z-index: -1;

  & img {
    width: 100%;
    height: 100%;

    object-fit: fill;
  }
`
export const Heading = styled.h1`
  margin-top: 2rem;
  font-size: var(--font-size-headingXXL);

  ${media.laptopsmall`
  font-size: var(--font-size-headingXL);
  `}
`

export const DateContainer = styled.div`
  position: relative;
  max-width: 60rem;
  text-align: center;
`
export const Date = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-headingM);
  padding: 0 2rem;

  ${media.laptopsmall`
  font-size: var(--font-size-headingS);
  `}

  ${media.tabport`
  font-size: var(--font-size-headingXS);
  `}
`
export const DateBg = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  z-index: -1;

  & img {
    width: 100%;
    height: 100%;

    object-fit: fill;
  }
`

export const VideoContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`

export const VideoWrapper = styled.div`
  position: relative;

  padding-bottom: 55%;
  width: 100%;

  position: relative;
  z-index: 4;

  margin: 0 auto;

  transform: ${props =>
    `translateY(calc(max(-${props.offset}px, -700px) * .5))`};

  ${media.tabport`
transform: ${props => `translateY(calc(max(-${props.offset}px, -600px) * .5))`};
  `}
`

// export const Video = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;

//   border: solid 1rem var(--color-blue-light);
// `
