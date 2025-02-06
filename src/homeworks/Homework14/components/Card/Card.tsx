import Message from "../Message/Message";
import { CardContainer, Title } from "./styles";

function Card () {
  return (
    <CardContainer>
      <Title>Имя Фамилия</Title>
      <Message />
    </CardContainer>
  );
};

export default Card;
