import styled from "@emotion/styled";

export const EmiratesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #a9010c 0%, #f7021e 100%);
  min-height: 80vh;
  color: white;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  font-family: "Times New Roman", serif;
  margin-bottom: 30px;
  text-transform: none;
  letter-spacing: 2px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
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
