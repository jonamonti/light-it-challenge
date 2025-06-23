import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  font-weight: 600;
  border-radius: var(--radius);
  font-family: inherit;
  cursor: pointer;
  transition: background-color var(--transition);
  background-color: white;
  color: var(--color-body-bg);
  &:hover {
    background-color: var(--color-accent);
    color: var(--color-text)
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;