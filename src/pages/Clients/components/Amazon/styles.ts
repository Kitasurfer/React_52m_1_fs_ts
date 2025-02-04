import styled from "@emotion/styled";

export const AmazonPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #232f3e 0%, #37475a 100%);
  min-height: 80vh;
  color: white;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #ff9900;
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
  color: #ffffff;
`;
