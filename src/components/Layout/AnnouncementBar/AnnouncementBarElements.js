import styled from "styled-components"

export const Bar = styled.div`
  background: var(--color-blue-light);
  color: white;
  text-align: center;
  padding: 1rem 2.5rem;
  width: 100%;
  font-size: 1.1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.35rem;
  }
`

export const RegisterLink = styled.a`
  color: white;
  text-decoration: underline;
`
