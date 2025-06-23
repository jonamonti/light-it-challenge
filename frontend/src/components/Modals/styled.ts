import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: var(--radius);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  border-top-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
    width: 100%;
`
