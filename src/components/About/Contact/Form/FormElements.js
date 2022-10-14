import styled from "styled-components"
import { media } from "../../../../../media"

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

export const Select = styled.select`
  appearance: none;
  cursor: pointer;
  font-size: var(--font-size-bodyS);
  border: ${props =>
    props.filled === "" ? "none" : "solid 0.2rem var(--color-black)"};
  background-color: ${props =>
    props.filled === "" ? "transparent" : "var(--color-white)"};
  border-bottom: solid 0.2rem var(--color-black);

  padding: 0.5rem;

  &:focus {
    outline: 0;
    background-color: white;
    border: solid 0.2rem var(--color-black);
  }

  & option {
  }
`

export const SelectArrow = styled.img`
  position: absolute;
  right: 1rem;
  top: 1.2rem;
  cursor: pointer;
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

export const SelectLabel = styled.label`
  margin-left: 0.5rem;
  margin-bottom: 1rem;

  pointer-events: none;
  position: absolute;

  font-weight: bold;
  opacity: 0;
  transition: 0.2s ease all;

  transform: ${props =>
    props.filled === "" ? "translateY(0rem)" : "translateY(-3rem)"};
  opacity: ${props => (props.filled === "" ? "0" : "1")};
  font-size: var(--font-size-bodyXS);

  ${Select}:focus ~ & {
    transform: translateY(-3rem);
    opacity: 1;
    font-size: var(--font-size-bodyXS);
  }
`

export const TextArea = styled.textarea`
  border: solid 0.2rem var(--color-black);
  background-color: transparent;
  transition: 0.2s ease all;

  padding: 0.5rem;
  font-size: var(--font-size-bodyS);
  font-family: var(--font-body);

  &:focus {
    outline: 0;
  }

  ::placeholder {
    opacity: 0;
  }

  &:focus,
  :not(:placeholder-shown) {
    background-color: white;
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

  ${TextArea}:focus ~ & {
    transform: translateY(-3rem);
    font-weight: 700;
    font-size: var(--font-size-bodyXS);
  }

  ${TextArea}:not(:placeholder-shown)~ & {
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
