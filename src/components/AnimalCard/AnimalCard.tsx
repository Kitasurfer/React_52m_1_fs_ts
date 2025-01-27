import { AnimalCardWrapper } from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <h3>{animalName}</h3>
      <AnimalCardWrapper>{animalSpecies}</AnimalCardWrapper>
      <img src={animalImg} className="card-image" />
      {/* prop children позволяет добавлять дополнительную структуру(JSX, компоненты) в компонент */}
      {children}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
