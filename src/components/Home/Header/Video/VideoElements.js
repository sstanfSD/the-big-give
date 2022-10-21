import styled from "styled-components"
import { media } from "../../../../../media"

export const VideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;

  border: solid 1rem var(--color-blue-light);

  &::-webkit-media-controls-start-playback-button {
    opacity: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    display: none !important;
    -webkit-appearance: none !important;
  }
`
