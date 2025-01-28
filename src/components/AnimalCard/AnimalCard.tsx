import React from "react";
import { AnimalCardWrapper, CardImage, Title, SpeciesBlock } from "./styles";
import { AnimalCardProps } from "./types";

const AnimalCard: React.FC<AnimalCardProps> = ({ animalName, animalSpecies, animalImg, children }) => {
  return (
    <AnimalCardWrapper>
      <Title>{animalName}</Title>
      <SpeciesBlock>{animalSpecies}</SpeciesBlock>
      <CardImage src={animalImg} alt={`${animalName} image`} />
      {children}
    </AnimalCardWrapper>
  );
};

export default AnimalCard;
