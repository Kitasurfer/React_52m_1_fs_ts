import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #bbb;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #0077cc;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #005fa3;
  }
`;
