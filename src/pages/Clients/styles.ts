import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const CompanyList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 auto;
  max-width: 900px;
`;

export const CompanyItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  min-height: 80px; /* Увеличиваем высоту для лучшего отображения */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CompanyLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  padding: 10px;
`;

export const CompanyLogo = styled.img`
  height: 60px; /* Установите фиксированную высоту */
  width: auto; /* Автоматическая ширина для сохранения пропорций */
  margin-right: 20px; /* Отступ справа */
  transition: transform 0.3s ease;
  border-radius: 10px; /* Добавляем скругление углов */

  &:hover {
    transform: scale(1.2); /* Увеличение логотипа при наведении */
  }
`;
