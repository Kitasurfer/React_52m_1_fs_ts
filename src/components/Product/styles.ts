import styled from '@emotion/styled';

export const ProductContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 24px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(108, 92, 231, 0.15);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 22px;
  color: #2d3436;
  margin-bottom: 12px;
  font-weight: 600;
`;