import styled from "styled-components"
import { media } from "../../../../media"
import { GatsbyImage } from "gatsby-plugin-image"

export const Section = styled.section`
  background-color: var(--color-white);
  position: relative;
`
export const Container = styled.div`
  max-width: 160rem;
  margin: 0 auto;
  padding: 10rem 5rem;

  display: grid;
  grid-template-columns: 35% 60%;
  column-gap: 5%;

  ${media.tabland`
    grid-template-columns: 1fr;
  `}

  ${media.phone`
  padding: 10rem 2.5rem;
  `}
`
export const TextContainer = styled.div`
  position: sticky;
  top: 0;

  height: min-content;

  ${media.tabland`
  position: relative;
    margin-bottom: 10rem;
  `}
`
export const Heading = styled.h2``
export const Body = styled.p`
  margin-bottom: 5rem;
`

export const TeamContainer = styled.div``
export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  padding: 0 10rem;
  margin-bottom: 2.5rem;

  ${media.tabport`
  padding: 0rem;
  `}

  ${media.phone`
  
  gap:1rem;
  margin-bottom: 1rem;
  `}
`
export const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;

  ${media.tabport`
  grid-template-columns: 1fr 1fr;
  `}

  ${media.phone`
  gap:1rem;
  `}
`
