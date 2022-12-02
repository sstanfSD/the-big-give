import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  padding: 10rem 5rem 15rem;

  ${media.phone`
  padding: 5rem 2.5rem 10rem;
  `}
`
export const Container = styled.div`
  margin: 0 auto;
`
export const MapContainer = styled.div`
  display: flex;
  justify-content: center;

  & iframe {
    border: none;
  }
`

export const Heading = styled.h2`
  text-align: center;
  color: var(--color-white);

  margin-bottom: 10rem;

  ${media.phone`
  margin-bottom: 5rem;
  `}
`
