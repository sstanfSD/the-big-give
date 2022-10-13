import styled from "styled-components"
import { media } from "../../../../media"

import bg from "../../../assets/images/about/header/text-bg.svg"

export const Section = styled.section`
  margin: 0 auto;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 10rem;
  padding: 10rem 5rem;

  max-width: var(--max-width);

  margin: 0 auto;

  overflow: hidden;

  ${media.tabland`
  column-gap: 5rem;
  padding: 10rem 2.5rem;
  `}

  ${media.tabland`
grid-template-columns: 1fr;
justify-items: center;
  `}

  ${media.phonesmall`
  padding: 5rem 2.5rem;
  `}
`

export const TextContainer = styled.div`
  position: relative;

  max-width: 70rem;

  margin: 2rem;

  height: min-content;

  align-self: center;
  justify-self: center;

  ${media.tabland`


margin-bottom: 10rem;
`}

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

  padding: 5rem 2.5rem 2.5rem;
  `}
`

export const Heading = styled.h1`
  font-size: var(--font-size-headingL);
`

export const LocationDate = styled.p`
  font-size: var(--font-size-bodyL);
  margin-bottom: 2.5rem;
`

export const Body = styled.div`
  & p {
    font-size: var(--font-size-bodyS);
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
