import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
gap: var(--space-md);
padding: var( --space-md);
/* background-color: blue; */
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 0.25rem;
`;

export const Title = styled.h2`
font-size: 2rem;
font-weight: 700;
color: var(--color-body-bg);
`;

export const Label = styled.label`
font-size: 1.75rem;
font-weight: 500;
color: var(--color-body-bg);
text-align: left;
@media (max-width: 480px) {
  font-size: 1.5rem;
}
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid #ccc;
  width: 100%;
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

export const Error = styled.span`
color: var(--color-error);
font-size: 1.25rem;
font-weight: 500;
transition: opacity 0.5 ease;
text-align: left;

@media (max-width: 480px) {
  font-size: 1rem;
}
`;

export const Row = styled.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;

  > div {
    flex: 1;
    min-width: 120px;
  }
`;

export const DropArea = styled.div`
  padding: 1.5rem;
  border: 2px dashed #ccc;
  border-radius: var(--radius);
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    background-color: #f9f9f9;
  }
`;

export const DropText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-body-bg);
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  background: var(--color-accent);
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #7c3aed;
  }
`;

export const Spinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;