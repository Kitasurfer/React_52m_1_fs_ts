import styled from '@emotion/styled';

export const CounterWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
`;

export const CounterButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const CounterButton = styled.button`
  padding: 8px 16px;
  min-width: auto;
  font-size: 18px;
  background: #4CAF50;
  border-radius: 4px;
  box-shadow: none;
  transition: background-color 0.3s ease;

  &:hover {
    background: #45a049;
    background-image: none;
  }
`;