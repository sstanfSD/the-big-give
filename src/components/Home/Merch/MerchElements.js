import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
`

export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 10rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${media.phone`
    padding: 8rem 2.5rem;
  `}
`

export const Heading = styled.h2`
  margin-bottom: 2rem;
`

export const Body = styled.p`
  font-size: var(--font-size-bodyM);
  max-width: 70rem;
  margin-bottom: 4rem;
`
