import styled from "@emotion/styled";

export const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  width: 400px;
  
  border-radius: 8px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
  font-size: 16px;

  &:hover {
    background-color: #303f9f;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
