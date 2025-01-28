import styled from "@emotion/styled";

export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-width: 300px;
  min-height: 400px;
  background-color: rgb(145, 218, 211);
  border-radius: 6px;
  font-size: 24px;
`;

export const CardImage = styled.img`
  width: 100px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #2d3436;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const SpeciesBlock = styled.div`
  font-size: 20px;
  color: #2d3436;
  margin-bottom: 12px;
  font-weight: 600;
`;
