import styled from "@emotion/styled";

export const QatarPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #200019 0%, #4f0142 100%);
  min-height: 80vh;
  color: white;
`;

export const Logo = styled.img`
  width: 220px;
  margin-bottom: 20px;
  filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))
    drop-shadow(-2px -2px 4px rgba(255, 255, 255, 0.3));
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.6))
      drop-shadow(-3px -3px 5px rgba(255, 255, 255, 0.4));
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem; /* Размер заголовка */
  font-weight: bold; /* Жирное начертание */
  margin: 20px 0; /* Отступы сверху и снизу */
  color: #fff; /* Цвет текста */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;
