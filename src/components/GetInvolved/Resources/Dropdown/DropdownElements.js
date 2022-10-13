import styled from "styled-components"
import { media } from "../../../../../media"

export const DropdownContainer = styled.div`
  cursor: pointer;
  width: 25rem;
`

export const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${props =>
    props.open
      ? "solid .1rem var(--color-black)"
      : "solid 0.2rem var(--color-black)"};

  cursor: pointer;
  padding: 0 1rem;

  & span {
    font-size: var(--font-size-bodyXS);
    white-space: nowrap;
  }
`

export const Btn = styled.img``

export const List = styled.ul`
  display: ${props => (props.open ? "block" : "none")};

  list-style: none;
  border: solid 0.1rem var(--color-black);
  border-top: none;
`

export const Item = styled.li`
  padding: 1rem;
  font-size: var(--font-size-bodyXS);
  border: solid 0.1rem var(--color-black);
  white-space: nowrap;

  transition: background-color ease 0.2s;

  &:hover {
    background-color: #d9d9d9;
  }
`
