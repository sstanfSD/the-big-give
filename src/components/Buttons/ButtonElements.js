import styled from "styled-components"
import { media } from "../../../media"

export const Button = styled.div`
  border: 2px solid var(--color-black);
  box-shadow: 4px 4px 0 0 var(--color-black);

  padding: ${props => (props.large ? "1.5rem 4rem" : "1rem 3rem")};

  white-space: nowrap;
  max-width: min-content;

  font-weight: bold;
  font-size: ${props => (props.large ? "2.2rem" : "1.6rem")};

  transition: all 0.2s ease;

  ${media.phone`
  padding: 1rem 3rem;
  font-size:1.6rem;
  `}

  &:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(4px, 4px);
  }
`

export const ButtonPrimary = styled(Button)`
  background-color: var(--color-red);
  color: var(--color-white);
`

export const ButtonPrimaryBlue = styled(Button)`
  background-color: var(--color-blue);
  color: var(--color-white);
`
