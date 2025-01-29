import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Анимация появления
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeworkContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.5s ease;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f8f9fa;
  animation: ${fadeIn} 0.5s ease;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f2f5;
    transform: translateY(-2px);
  }
`;

export const ResultBlock = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 6px;
  font-size: 1rem;
  color: #2c3e50;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    border-color: #d0d7de;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
`;