import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import {
  Container,
  InputWrapper,
  StyledInput,
  ImageContainer,
  ErrorMessage,
} from "./styles";

function Homework10() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageValue, setImageValue] = useState<string>("");
  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const fetchImageData = async () => {
    const IMAGE_URL: string = "https://dog.ceo/api/breeds/image/random";
    try {
      setIsLoading(true);
      setError(null);
      const result = await axios.get(IMAGE_URL);
      setImageValue(result.data.message);
    } catch (error: any) {
      setError(error.message || "Произошла ошибка при загрузке изображения");
    } finally {
      setIsLoading(false);
    }
  };

  const onFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFirstInputValue(value);
    fetchImageData();
  };

  const onSecondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSecondInputValue(value);
    fetchImageData();
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <Container>
      <InputWrapper>
        <StyledInput
          type="text"
          value={firstInputValue}
          onChange={onFirstInputChange}
          placeholder="Введите текст для случайного изображения"
        />
      </InputWrapper>

      <InputWrapper>
        <StyledInput
          type="text"
          value={secondInputValue}
          onChange={onSecondInputChange}
          placeholder="Введите текст для случайного изображения"
        />
      </InputWrapper>

      <ImageContainer>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          imageValue && <img src={imageValue} alt="Random Dog" />
        )}
      </ImageContainer>
    </Container>
  );
}

export default Homework10;
