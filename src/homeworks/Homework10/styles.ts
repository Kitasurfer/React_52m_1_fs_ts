/* Требования по ДЗ:

Cоздайте компонент Homework10 в папке homeworks, в нем должно быть 2 компонента Input
Каждый из инпутов должен быть котролируемым компонентом и контролироваться с помощью родительского состояния
При изменении значения в первом поле должен отправляться запрос на URL https://dog.ceo/api/breeds/image/random 
после того, как данные придут, их необходимо отобразить на странице (это будет картинка)

Задача *
При ожидании ответа от сервера необходимо показывать спиннер
При получении ошибки её необходимо отобразить на странице
Cделайте Pull request и сбросьте мне ссылку на него в слаке */

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #ffffff;
  font-family: Lato, sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  &:focus {
    border-color: #2196f3;
    box-shadow: 0 0 8px rgba(33, 150, 243, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
