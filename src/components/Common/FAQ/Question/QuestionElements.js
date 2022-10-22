import styled from "styled-components"

export const QuestionElement = styled.p`
  font-size: 1.8rem;
  font-weight: bold;

  margin-bottom: 2rem;
  color: ${props => (props.open ? "var(--color-white)" : "#C9C9C9")};

  cursor: pointer;
  transition: color ease 0.3s;

  &:hover {
    color: var(--color-white);
  }
`
export const Answer = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  margin-bottom: 3rem;
  margin-top: -1rem;

  & p {
    font-size: 1.6rem;
  }

  & a {
    color: var(--color-white);
    text-decoration: underline;
  }

  & ul {
    margin-left: 2rem;

    & li {
      margin: 0.5rem 0;
      font-size: 1.6rem;
    }
  }
`
