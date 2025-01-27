
import { InputProps } from './types';
import styled from '@emotion/styled';

const InputGroup = styled.div`
  /* styles for InputGroup */
`;

const InputLabel = styled.label`
  /* styles for InputLabel */
`;

const CustomInput = styled.input`
  /* styles for CustomInput */
`;

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
}: InputProps) => {
  return (
    <InputGroup>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <CustomInput name={name} type={type} placeholder={placeholder} />
    </InputGroup>
  );
}

export default Input;