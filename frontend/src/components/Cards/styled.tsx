import styled from "styled-components";
import type { StatusCardProps } from "../../types/types";

export const PHContainer = styled.div<{ loading?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 24rem;
  padding: 4rem;
  border-top-left-radius: 6rem;
  border-bottom-right-radius: 6rem;
  background-color: #7345fc;

  animation: ${({ loading }) => (loading ? `pulse 1.5s ease-in-out infinite` : null)};

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Card = styled.div<{ expanded: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ expanded }) => (expanded === 'true' ? '15rem' : '10rem')};
  background: white;
  border-bottom-right-radius: 3rem;
  overflow: hidden;
  transition: height 0.5s ease, background-color 0.5s ease;
  &:hover {
    background-color: #bba8f4;
  }
`;

export const Header = styled.div`
display: flex;
width: 100%;
align-items: center;
padding: var(--space-md);
cursor: pointer;
`;

export const Image = styled.img`
width: 80px;
height: 80px;
border-radius: var(--radius);
object-fit: cover;
margin-right: var(--space-md);
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 1.75rem;
  color: var(--color-body-bg);
  word-break: break-word;
  white-space: normal;
  overflow-wrap: break-word;

`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: var(--space-md);
  color: var(--color-body-bg);
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const Data = styled.text`
  color: var(--color-body-bg);
  font-size: 1.25rem;
`;

export const VisibleDetails = styled(Details)`
  opacity: 1;
  transform: translateY(0);
`;

export const PatientList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-md);
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 per row on large screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 per row on tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 per row on mobile */
  }
`;

export const StatusCard = styled.div<StatusCardProps>`
  padding: 3rem 2rem;
  height: 100%;
  border-top-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  color: #fff;
  text-align: center;
  background-color: ${({ status }) =>
    status === 'success' ? 'var(--color-success)' : status === 'error' ? 'var(--color-error)' : 'white'};
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

