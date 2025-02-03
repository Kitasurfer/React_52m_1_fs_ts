import { useState, useEffect, useCallback } from 'react';
import {
  StyledContainer,
  Header,
  ActionButton,
  FactsContainer,
  FactItem,
  ImageContainer,
  CatImage,
  FactText,
  DeleteButton,
  ErrorMessage
} from './styles';



const Lesson11: React.FC = () => {
  const [facts, setFacts] = useState<CatFact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  

  const fetchFact = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [factRes, imageRes] = await Promise.all([
        fetch('https://catfact.ninja/fact'),
        fetch('https://api.thecatapi.com/v1/images/search')
      ]);

      if (!factRes.ok || !imageRes.ok) {
        throw new Error('Error fetching data');
      }

      const [factData, imageData] = await Promise.all([
        factRes.json(),
        imageRes.json()
      ]);

      setFacts(prev => [
        ...prev,
        {
          id: Date.now(),
          fact: factData.fact,
          imageUrl: imageData[0].url
        }
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error message');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteAll = () => setFacts([]);
  const deleteSingle = (id: number) =>
    setFacts(prev => prev.filter(fact => fact.id !== id));

	// Автоматический запрос факта при загрузке компонента
  useEffect(() => {
    fetchFact();
  }, []);
	

  return (
    <StyledContainer>
      <Header>😺 Cat Facts Delight 😺</Header>
      <ActionButton variant="primary" onClick={fetchFact} disabled={isLoading}>
        {isLoading ? 'Loading Cat Fact...' : 'GET MORE INFO'}
      </ActionButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {facts.length > 0 && (
        <>
          <FactsContainer>
            {facts.map(({ id, fact, imageUrl }) => (
              <FactItem key={id}>
                <ImageContainer>
                  <CatImage src={imageUrl} alt="Cat Image" loading="lazy" />
                </ImageContainer>
                <FactText>{fact}</FactText>
                <DeleteButton onClick={() => deleteSingle(id)} title="DELETE ALL DATA”">
                  🐾
                </DeleteButton>
              </FactItem>
            ))}
          </FactsContainer>

          <ActionButton variant="danger" onClick={deleteAll}>
						DELETE ALL FACTS
          </ActionButton>
        </>
      )}
    </StyledContainer>
  );
};

export default Lesson11;