import styled from "styled-components"
import { media } from "../../../../../media"

export const VideoContainer = styled.div`
  border: solid 1rem var(--color-blue-light);
  position: relative;
  width: 100%;

  padding-bottom: ${props => (props.playFullVideo ? "56.25%" : "0")};
  overflow: hidden;
`

export const VideoElement = styled.video`
  display: ${props => (props.playFullVideo ? "none" : "block")};
  position: relative;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;

  &::-webkit-media-controls-start-playback-button {
    opacity: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    display: none !important;
    -webkit-appearance: none !important;
  }
`

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  border: none;
`

export const BtnText = styled.span`
  z-index: 3;
  position: relative;

  white-space: nowrap;

  font-family: var(--font-body);
  font-weight: bold;
  font-size: var(--font-size-bodyS);

  transition: ease 0.2s;
`

export const BtnContainer = styled.button`
  display: ${props => (props.playFullVideo ? "none" : "flex")};
  position: absolute;
  z-index: 2;
  width: min-content;

  background-color: transparent;
  outline: none;
  border: none;

  justify-content: center;
  align-items: center;

  bottom: 5rem;
  right: 8rem;

  height: 7rem;
  width: 18rem;

  cursor: pointer;

  ${media.tabport`
  bottom: 2.5rem;
  right: 4rem;
  `}

  ${media.phone`
  bottom: 1rem;
  right: 0rem;
  `}

  &:hover {
    & path {
      fill: var(--color-red);
    }

    & ${BtnText} {
      color: var(--color-white);
    }
  }

  & path {
    transition: ease 0.2s;
  }

  & svg {
    position: absolute;

    ${media.phone`
  height: 5rem;
  width: 15rem;
  `}
  }
`
