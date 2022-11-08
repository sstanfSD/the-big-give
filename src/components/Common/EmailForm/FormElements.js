import styled from "styled-components"
import { media } from "../../../../media"

export const FormElement = styled.form`
  font-size: var(--font-size-bodyS);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 3rem 0;

  position: relative;
`

export const Input = styled.input`
  padding: 0.5rem;
  font-size: var(--font-size-bodyS);

  border: none;
  background-color: transparent;
  border-bottom: solid 0.2rem var(--color-black);

  &:focus,
  :not(:placeholder-shown) {
    outline: 0;
    background-color: white;
    border: solid 0.2rem var(--color-black);
  }

  ::placeholder {
    opacity: 0;
  }
`

export const Label = styled.label`
  margin-left: 0.5rem;
  position: absolute;

  transform: translateY(0rem);

  transition: 0.2s ease all;

  ${Input}:focus ~ & {
    transform: translateY(-3rem);
    font-weight: 700;
    font-size: var(--font-size-bodyXS);
  }

  ${Input}:not(:placeholder-shown)~ & {
    transform: translateY(-3rem);
    font-weight: 700;
    font-size: var(--font-size-bodyXS);
  }
`

export const ErrorMessage = styled.div`
  font-size: var(--font-size-bodyXS);
  margin-left: 0.5rem;
  margin-top: 1rem;
`

export const Btn = styled.button`
  cursor: pointer;
  background-color: var(--color-red);
  color: var(--color-white);
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
