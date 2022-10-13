import styled from "styled-components"

export const CardContainer = styled.div`
  cursor: pointer;
  position: relative;

  height: 99.7%;

  box-shadow: 6px 6px 0 0 var(--color-black);

  transition: all 0.2s ease;
  border: solid 0.1rem var(--color-black);

  &:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(6px, 6px);
  }
`
export const CardText = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;

  display: flex;
  flex-direction: column;

  font-size: var(--font-size-bodyS);
  color: var(--color-white);
  text-shadow: 1px 1px 1px #000;
  padding: 1rem;
`
export const Name = styled.span`
  font-weight: bold;
`
export const Role = styled.span``
