import styled from "styled-components"
import { media } from "../../../../../media"

export const Container = styled.div`
  display: ${props => (props.activeVideo === props.index ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  & iframe {
    display: ${props => (props.activeVideo === props.index ? "flex" : "none")};
  }
`

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  padding: 0 2.5rem;
`

export const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  overflow: hidden;

  width: 100%;
  height: 0;

  position: relative;
`
export const VideoIframe = styled.iframe`
  display: ${props => (props.activeVideo === props.index ? "flex" : "none")};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  border: none;
`
