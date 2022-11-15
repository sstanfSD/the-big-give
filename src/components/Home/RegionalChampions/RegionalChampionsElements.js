import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
  position: relative;

  height: calc(${props => props.height} * 50rem);

  ${media.tabland`
height: 100%;
`}
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 10rem 0;

  overflow: hidden;
  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: 45% 55%;

  ${media.tabland`

    max-width: 80rem;
    grid-template-columns: 1fr;
    height: 100%;
    padding: 10rem 5rem 5rem;
  `}

  ${media.phone`
    padding: 5rem 2.5rem 2.5rem;
  `}
`

export const TextContainer = styled.div`
  border-right: solid 0.2rem var(--color-black);
  padding: 5rem 5rem 10rem 0;
  background-color: var(--color-white);
  position: relative;
  z-index: 2;

  padding: 0 10rem;

  ${media.tabland`
  border-right: 0;
  padding: 0 0rem;
  `}
`
export const Heading = styled.h2`
  margin-bottom: 2rem;
`
export const Body = styled.p`
  margin-bottom: 5rem;
  font-size: var(--font-size-bodyS);
`

export const CardsContainer = styled.ul`
  display: flex;
  column-gap: 3rem;

  height: min-content;
  align-self: center;

  list-style: none;

  will-change: transform;

  transform: translateX(calc(${props => props.scrollPosition}rem / 8));

  ${media.tabland`
    transform: translateX(0);

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 5rem;
  margin-top: 10rem;
  `}

  ${media.phone`
  grid-template-columns: 1fr;
  justify-items: center;
  `}



  & li:nth-of-type(1n - 1) {
    background-color: var(--color-blue);
  }

  & li:nth-of-type(2n - 2) {
    background-color: var(--color-blue-dark);
  }

  & li:nth-of-type(3n - 3) {
    background-color: var(--color-red);
  }
`
