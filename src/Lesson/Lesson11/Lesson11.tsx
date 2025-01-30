import React, { useState } from 'react';
import {
  Container,
  FactsBlock,
  FactsList,
  FactItem,
  Loading,
  Error,
  Button,
  ButtonContainer
} from './styles';

const Lesson11: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFact = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!navigator.onLine) {
        throw new Error('Нет подключения к интернету');
      }

      const response = await fetch('https://catfact.ninja/fact');

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Ресурс не найден');
        } else if (response.status === 500) {
          throw new Error('Ошибка сервера');
        } else {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
      }

      const data = await response.json();

      if (!data.fact) {
        throw new Error('Получен пустой ответ от сервера');
      }

      setFacts(prev => [...prev, data.fact]);
    } catch (err) {
      console.error('Ошибка:', err);
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка при загрузке факта о котах');
    } finally {
      setLoading(false);
    }
  };

  const deleteAllData = () => setFacts([]);

  return (
    <Container>
      <ButtonContainer>
        <Button
          bgColor="#d9534f"
          hoverColor="#c9302c"
          onClick={fetchFact}
          disabled={loading}
        >
          GET MORE INFO
        </Button>
      </ButtonContainer>
      {loading && <Loading>Загрузка...</Loading>}
      {error && <Error>{error}</Error>}
      {facts.length > 0 && (
        <FactsBlock>
          <FactsList>
            {facts.map((fact, index) => (
              <FactItem key={index}>{fact}</FactItem>
            ))}
          </FactsList>
        </FactsBlock>
      )}
      {facts.length > 0 && (
        <ButtonContainer>
          <Button
            bgColor="#c9302c"
            hoverColor="#a9201c"
            onClick={deleteAllData}
          >
            DELETE ALL DATA
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Lesson11;