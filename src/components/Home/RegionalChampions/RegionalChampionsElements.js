import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 10rem;

  height: 100vh;

  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;

  ${media.tabland`
    grid-template-columns: 1fr;
    height: 100%;
    padding: 0 5rem 5rem;
  `}

  ${media.phone`
    padding: 0 2.5rem 2.5rem;
  `}
`

export const TextContainer = styled.div`
  border-right: solid 0.2rem var(--color-black);
  padding: 10rem 5rem 10rem 0;

  ${media.tabland`
  border-right: 0;
  `}
`
export const Heading = styled.h2``
export const Body = styled.p`
  margin-bottom: 5rem;
`

export const CardsContainer = styled.div`
  display: none;

  & div:nth-of-type(3n) {
    background-color: var(--color-red) !important;
  }

  ${media.tabland`
  display: flex;
  flex-direction: column;
  align-items: center;
  `}
`
