import styled from "styled-components"
import { media } from "../../../../media"

import HeadingBg from "../../../assets/images/home/HeadingBgWhite.png"
import HeadingBgMobile from "../../../assets/images/home/HeadingBgWhiteMobile.png"
import DateBg from "../../../assets/images/home/HeadingBgBlack.png"
import DateBgMobile from "../../../assets/images/home/HeadingBgBlackMobile.png"

export const Section = styled.section``
export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  height: 90rem;

  padding: 5rem 2.5rem 5rem;

  ${media.tabport`
  height: 80rem;
  `}

  ${media.phone`
  padding:5rem 2.5rem 5rem;
  height: 70rem;
  `}

  ${media.phonesmall`
  height: 60rem;
  `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;

  margin-bottom: 10rem;

  ${media.phone`
  margin-bottom: 5rem;
  `}
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
// export const HeadingBg = styled.div`
//   position: absolute;

//   width: 100%;
//   height: 110%;

//   padding: 0rem;

//   z-index: -1;

//   & .gatsby-image-wrapper {
//     height: 100%;
//   }
// `

export const Heading = styled.h1`
  margin: 2rem 1rem 0;
  font-size: var(--font-size-headingXXL);

  background-image: url(${HeadingBg});
  background-size: 100% 100%;
  padding: 2rem;

  ${media.laptopsmall`
  font-size: var(--font-size-headingXL);
  width: 95%;
  `}

  ${media.phoneheading`
  background-image: url(${HeadingBgMobile});
  `}
`

export const DateContainer = styled.div`
  position: relative;
  max-width: 60rem;
  text-align: center;
  margin-bottom: 3rem;
`
export const Date = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-headingM);
  padding: 0 2rem;

  margin: -1rem 0;

  background-image: url(${DateBg});
  background-size: 100% 100%;
  padding: 2rem;

  ${media.laptopsmall`
  font-size: var(--font-size-headingS);
  `}

  ${media.tabport`
  font-size: var(--font-size-headingXS);
  `}

  ${media.phoneheading`
  background-image:url(${DateBgMobile});
  `}
`
// export const DateBg = styled.div`
//   position: absolute;

//   width: 100%;
//   height: 100%;

//   z-index: -1;

//   & img {
//     width: 100%;
//     object-fit: fill;
//   }

//   & .gatsby-image-wrapper {
//   }
// `

export const VideoContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`

export const VideoWrapper = styled.div`
  position: relative;

  width: 100%;

  position: relative;
  z-index: 4;

  margin: 0 auto;

  transform: ${props =>
    `translateY(calc(max(-${props.offset}px, -700px) * .5))`};

  ${media.tabport`
transform: ${props => `translateY(calc(max(-${props.offset}px, -600px) * .5))`};
  `}

  ${media.phone`
  transform: ${props =>
    `translateY(calc(max(-${props.offset}px, -500px) * .5))`};
  `}

  ${media.phonesmall`
  transform: ${props =>
    `translateY(calc(max(-${props.offset}px, -400px) * .5))`};
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
