import React, { useState, useCallback } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
  HomeworkContainer,
  InputsContainer,
  ResultContainer,
  ResultBlock,
  BackgroundImage,
} from "./styles";

interface InputData {
  id: string;
  label: string;
  placeholder: string;
  value: string;
}

const Homework09: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    input1: "",
    input2: "",
  });
  const [showResults, setShowResults] = useState(false);

  const inputs: InputData[] = [
    {
      id: "input1",
      label: "Первое поле",
      placeholder: "Введите текст...",
      value: formData.input1,
    },
    {
      id: "input2",
      label: "Второе поле",
      placeholder: "Введите текст...",
      value: formData.input2,
    },
  ];

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleButtonClick = useCallback(() => {
    setShowResults(true);
  }, []);

  const renderInputs = () =>
    inputs.map(({ id, label, placeholder, value }) => (
      <Input
        key={id}
        name={id}
        label={label}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    ));

  const renderResults = () =>
    showResults && (
      <ResultContainer>
        {inputs.map(({ id, label }) => (
          <ResultBlock key={`result-${id}`}>
            {`${label}: ${formData[id]}`}
          </ResultBlock>
        ))}
      </ResultContainer>
    );

  return (
    <>
      <BackgroundImage />
      <HomeworkContainer>
        <InputsContainer>
          {renderInputs()}
          <Button
            name="Показать результат"
            type="button"
            onClick={handleButtonClick}
          />
        </InputsContainer>
        {renderResults()}
      </HomeworkContainer>
    </>
  );
};

export default Homework09;