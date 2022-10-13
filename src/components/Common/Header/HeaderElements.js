import styled from "styled-components"
import { media } from "../../../../media"

import bg from "../../../assets/images/about/header/text-bg.svg"

export const Section = styled.section`
  margin: 0 auto;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10rem;
  padding: 10rem 5rem;

  margin: 0 auto;

  overflow: hidden;

  ${media.tabland`
  column-gap: 5rem;
  padding: 10rem 2.5rem;
  `}

  ${media.tabport`
grid-template-columns: 1fr;
  `}

  ${media.phonesmall`
  padding: 5rem 1rem;
  `}
`

export const TextContainer = styled.div`
  position: relative;

  max-width: 70rem;

  margin: 2rem;

  height: min-content;

  align-self: center;
  justify-self: center;

  ${media.tabport`

  text-align: center;
  margin-bottom: 10rem;
  `}

  ${media.phone`
  margin: 0;
  margin-bottom: 5rem;
  `}
`

export const TextBg = styled.div`
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

export const TextContent = styled.div`
  padding: 5rem;

  & div {
    margin-bottom: 2rem;
  }

  ${media.tabport`
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  `}

  ${media.phone`
  padding: 5rem 2.5rem;
  `}
`

export const Heading = styled.h1``
export const Body = styled.p`
  margin-bottom: 5rem;

  ${media.phonesmall`
  margin-bottom: 2.5rem;
  `}
`

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;

  ${media.laptopsmall`
width: 120%;
transform: translateX(-5%);
`}

  ${media.tabland`
row-gap: 2rem;
transform: translateX(0%);
  `}

  ${media.tabport`
  width: 130%;
  `}
`
export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;

  overflow: hidden;

  transform: translateX(10%);

  ${media.tabland`
  column-gap: 2rem;
  transform: translateX(5%);
  `}

  ${media.tabport`
  transform: translateX(-10%);

  & .gatsby-image-wrapper{
    max-height: 25rem
  }
  `}
`
export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;

  ${media.tabland`
  column-gap: 2rem;
  `}

  ${media.tabport`
  transform: translateX(-15%);

  & .gatsby-image-wrapper{
    max-height: 25rem
  }
  `}
`
