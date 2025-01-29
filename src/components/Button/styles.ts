import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: 100%;
  min-height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  background: #1f27f5;
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: pointer;

  &.disabled {
    background: gray; // Цвет для отключенной кнопки
    cursor: not-allowed;
    opacity: 0.6;
  }
`
