import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  max-width: 80rem;
  width: calc(100%-2.5rem);
  margin: 0 2.5rem;

  border-top: solid 0.2rem var(--color-black);
  padding: 5rem 5rem 7.5rem;

  ${media.phone`
  padding: 5rem 0rem 7.5rem;
  `}
`
export const TextContainer = styled.div`
  max-width: 60rem;

  text-align: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  & a {
    margin: 0 auto;
  }
`
export const Heading = styled.h2``
export const Body = styled.p`
  margin-bottom: 5rem;
`
