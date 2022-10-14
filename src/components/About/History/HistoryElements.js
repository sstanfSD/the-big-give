import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-blue-light);
`
export const Container = styled.div`
  max-width: 160rem;
  margin: 0 auto;

  padding: 10rem 5rem;

  display: grid;
  grid-template-columns: 50% 45%;
  column-gap: 5%;

  ${media.tabland`
  grid-template-columns: 45% 52.5%;

  column-gap:2.5%;
  padding: 10rem 2.5rem;
  `}

  ${media.tabport`
  grid-template-columns: 1fr;
  padding: 10rem 5rem;
  max-width: 75rem
  `}

  ${media.phone`
  padding: 5rem 2.5rem;
  `}
`

export const TimelineContainer = styled.div``

export const TextContainer = styled.div`
  color: var(--color-black);
  ${media.tabport`
  grid-row: 1;
  margin-bottom: 5rem
  `}
`
export const Heading = styled.h2``
export const Body = styled.div`
  & p {
    font-size: var(--font-size-bodyS);
    margin-bottom: 2rem;
  }
`
