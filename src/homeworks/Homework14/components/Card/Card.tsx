import React from 'react';
import Message from '../Message/Message';
import { CardContainer, Title } from './styles';

const Card: React.FC = () => {
  return (
    <CardContainer>
      <Title>Имя Фамилия</Title>
      <Message />
    </CardContainer>
  );
};

export default Card;
