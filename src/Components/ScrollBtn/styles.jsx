import styled from "styled-components";

export const Button = styled.button`
  background: var(--color-primary);
  border: none;
  border-radius: 25px;
  box-shadow: 5px 5px 5px 0px var(--color-secondary);
  color: var(--color-light);
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 2rem;

  &:hover {
    background: var(--color-secondary);
    font-size: 1.5rem;
  }

  &:active {
    background: var(--color-primary);
  }

  @media (max-width: 840px) {
    margin-bottom: 2rem;
  }
`