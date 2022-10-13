import styled from "styled-components"
import { media } from "../../../../../media"

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  transform: ${props => (props.open ? "translateX(0%)" : "translateX(100%)")};

  transition: transform ease 0.3s;
`

export const ModalScroll = styled.div`
  overflow-y: auto;
  height: 100%;

  display: grid;
  grid-template-columns: 60% 40%;

  ${media.tabland`
  grid-template-columns: 40% 60%;
  `}

  ${media.tabport`
  grid-template-columns: 1fr;
  `}
`

export const BioLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  ${media.tabport`
 display: none;
  `}
`

export const Bio = styled.div`
  background-color: var(--color-blue-light);
  width: 100%;
  height: 100%;
  align-self: flex-end;
  pointer-events: none;

  display: flex;
  padding: 0 5rem;
  align-items: center;

  ${media.tabport`
  padding:  5rem;
  `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.span`
  font-size: var(--font-size-headingL);
  font-weight: bold;

  ${media.phonesmall`
  font-size: var(--font-size-headingM);
  `}
`
export const Role = styled.span`
  font-size: var(--font-size-headingM);

  ${media.phonesmall`
  font-size: var(--font-size-headingS);
  `}
`

export const BioText = styled.div`
  & p {
    margin: 1rem 0;
    font-size: 1.6rem;

    ${media.phonesmall`
  font-size: var(--font-size-bodyXS);
  `}
  }
`

export const CloseBtn = styled.div`
  display: flex;
  position: absolute;

  top: 5rem;
  right: 5rem;

  width: 5rem;
  height: 5rem;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & div {
    width: 100%;
    height: 0.7rem;
    background-color: var(--color-black);

    transition: all 0.3s ease;

    cursor: pointer;

    ${media.tabport`
  height: 0.5rem;
  `}

    ${media.phonesmall`
  height: 0.3rem;
  `}
  }

  & div:nth-of-type(1) {
    transform-origin: top left;
    transform: rotate(45deg) translateY(0.7rem);

    ${media.tabport`
    transform: rotate(45deg) translateY(0.6rem);
  `}

    ${media.phonesmall`
  transform: rotate(45deg) translateY(0.3rem);
  `}
  }

  & div:nth-of-type(2) {
    transform-origin: bottom left;
    transform: rotate(-45deg) translateY(-0.7rem);

    ${media.tabport`
    transform: rotate(-45deg) translateY(-0.6rem);
  `}

    ${media.phonesmall`
  transform: rotate(-45deg) translateY(-0.25rem);
  `}
  }

  ${media.tabport`
  top: 1rem;
  right: 1rem;

  width: 4rem;
  height: 4rem;
  `}

  ${media.phone`
  top: 1rem;
  `}

  ${media.phonesmall`
  width: 2rem;
  height: 2rem;
  `}
`
