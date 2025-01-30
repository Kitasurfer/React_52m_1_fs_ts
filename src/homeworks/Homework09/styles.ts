import styled from "@emotion/styled";

// Фоновое изображение
export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://ybis.ru/wp-content/uploads/2023/09/nochnoe-nebo-8-2.webp");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

// Главный контейнер с эффектом стекла
export const HomeworkContainer = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;

  &:hover {
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;

  &:hover {
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
  }
`;

export const ResultBlock = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1rem;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 20px 0 rgba(31, 38, 135, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
`;