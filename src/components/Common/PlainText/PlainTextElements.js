import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-white);
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 5rem 2.5rem;
`
export const TextContainer = styled.div`
  max-width: 70rem;

  & h2 {
    margin-bottom: 2.5rem;
    font-family: var(--font-body);
  }

  & h3 {
    font-family: var(--font-body);
    font-size: var(--font-size-bodyL);
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;

    & li {
      margin: 3rem 0;
    }
  }

  & a {
    text-decoration: underline;
    color: var(--color-black);
  }
`
