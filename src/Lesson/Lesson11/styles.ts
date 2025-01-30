import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 2rem;
  gap: 1rem;
`;

export const FactsBlock = styled.div`
  width: 400px;
  max-height: 700px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FactItem = styled.li`
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 5px;
  transition: all 0.3s ease;
  word-break: break-word;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 1rem;
  color: #666;
  font-style: italic;

  &::after {
    content: '';
    animation: dots 1.5s infinite;
  }

  @keyframes dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60%, 100% { content: '...'; }
  }
`;

export const Error = styled.div`
  color: #721c24;
  padding: 1rem;
  background: #f8d7da;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #f5c6cb;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<{ bgColor?: string; hoverColor?: string }>`
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background: ${props => props.bgColor || '#d9534f'};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;

  &:hover {
    background: ${props => props.hoverColor || '#c9302c'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;