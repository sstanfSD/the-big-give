import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-blue-light);
`
export const Container = styled.div`
  padding: 10rem 0;
  margin: 0 10rem;

  & iframe {
    overflow: hidden !important;
  }
`

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
`

export const SocialContainer = styled.div``

export const BtnContainer = styled.div`
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`
