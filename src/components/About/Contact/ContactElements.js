import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-blue-light);
`
export const Container = styled.div`
  display: flex;

  ${media.tabport`
  display: grid;
  grid-template-columns: 1fr;
  `}
`

export const FormContainer = styled.div`
  width: 80rem;
  padding: 5rem 10rem;

  ${media.tabland`
  padding: 5rem;
  grid-row: 2;
  width: 100%;
  `}
`
export const TextContainer = styled.div``
export const Heading = styled.h2``
export const Body = styled.p`
  font-size: var(--font-size-bodyS);

  margin-bottom: 2.5rem;
`

export const ImageContainer = styled.div`
  & .gatsby-image-wrapper {
    height: 100%;

    ${media.tabland`
max-height: 60rem;
  `}
  }
`
