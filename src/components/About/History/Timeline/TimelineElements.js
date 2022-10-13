import styled from "styled-components"
import { media } from "../../../../../media"

export const TimelineSection = styled.div`
  position: relative;
`
export const TimelineContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  position: relative;
  padding: 5rem 0;

  /* & :after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: var(--color-black);
    z-index: -1;
    top: 0;
    bottom: 0;
    margin: 5rem 0 2rem -0.3rem;

    left: 50%;

    ${media.tabport`
    left:4rem;
    `}
  } */
`

export const TimelineItemWrapper = styled.div`
  width: 50%;
  padding: 1rem 4rem;
  position: relative;
  left: ${props => (props.left ? "0" : "50%")};
  margin-left: ${props => (props.left ? "0" : ".4rem")};

  margin-bottom: -10%;

  ${media.laptopsmall`
  width: 100%;
    padding-left: 7.5rem;
    padding-right: 5rem;
    left: 0;
    margin-left: 0;
    margin-bottom: 0;

    `}

  ${media.phonesmall`
  padding-left: 3.5rem;
    padding-right: 0rem;
    `}
`

export const TimelineItem = styled.div`
  background-color: var(--color-white);
  padding: 2rem 3rem;

  ${media.tabland`
  padding: 1rem 1.5rem;
  `}

  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;

  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 1.7rem;
    width: 0;
    z-index: 1;
    right: ${props => (props.left ? "-.9rem" : "auto")};
    left: ${props => (props.left ? "auto" : "-1.9rem")};
    border: medium solid #fff;

    border-width: ${props =>
      props.left ? "10px 0px 10px 10px;" : "10px 10px 10px 10px;"};
    border-color: ${props =>
      props.left
        ? "transparent transparent transparent #fff "
        : "transparent #fff transparent transparent"};

    ${media.laptopsmall`
    right: auto;
    left: -1.9rem;
    border-width: 10px 10px 10px 10px;
    border-color: transparent #fff transparent transparent;
    `}
  }

  &:after {
    content: "";
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    right: ${props => (props.left ? "-5.2rem" : "auto")};
    left: ${props => (props.left ? "auto" : "-5.7rem")};
    background-color: var(--color-black);
    border: 4px solid var(--color-black);
    top: 15px;
    border-radius: 50%;
    z-index: 1;

    background-color: var(--color-white);
    ${media.laptopsmall`
    left: -4.7rem;
    `};
  }
`

export const TimelineItemShadow = styled.div`
  background-color: var(--color-black);

  position: absolute;
  top: 1.5rem;
  width: calc(100% - 7.8rem);
  height: calc(100% - 2rem);

  z-index: 0;

  transform: translate(4px);

  ${media.laptopsmall`
  width: calc(100% - 12.3rem);
  height: calc(100% - 2rem);
  `}

  ${media.phonesmall`
  width: calc(100% - 3.4rem);
    `}

  /* padding-left: 7.5rem;
    padding-right: 5rem; */

  &:before {
    content: " ";

    height: 0;
    position: absolute;
    top: 1.7rem;
    width: 0;
    z-index: 1;
    right: ${props => (props.left ? "-.9rem" : "auto")};
    left: ${props => (props.left ? "auto" : "-1.9rem")};
    border: medium solid var(--color-black);

    border-width: ${props =>
      props.left ? "10px 0px 10px 10px;" : "10px 10px 10px 10px;"};
    border-color: ${props =>
      props.left
        ? "transparent transparent transparent var(--color-black) "
        : "transparent var(--color-black) transparent transparent"};

    ${media.laptopsmall`
    right: auto;
    left: -1.9rem;
    border-width: 10px 10px 10px 10px;
    border-color: transparent var(--color-black) transparent transparent;
    `}
  }
`

export const TimelineItemHeading = styled.h3`
  font-size: var(--font-size-bodyM);
  font-weight: 700;

  margin-bottom: 1rem;
`
export const TimelineItemSubheading = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`
export const TimelineItemList = styled.ul``
export const TimelineItemListItem = styled.li`
  font-size: var(--font-size-bodyM);

  margin-left: 4rem;

  ${media.phonesmall`
  margin-left: 2rem;
    `}
`

export const TimelineLine = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  background-color: var(--color-black);
  width: 1rem;

  left: 50%;
  transform: translateX(-50%);

  ${media.laptopsmall`
  left: 3.5rem;
  transform: translateX(0);
  height: 97%;
    `}

  ${media.phonesmall`
    left: -.4rem;
    `}
`
