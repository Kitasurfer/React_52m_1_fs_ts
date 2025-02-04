import { KLMPage, Title, Info, Logo } from "./styles";

function KLM() {
  return (
    <KLMPage>
      <Logo
        src="https://www.fahnenversand.de/fotw/images/n/nl$klm61b.gif"
        alt="KLM Logo"
      />
      <Title>KLM Royal Dutch Airlines</Title>
      <Info>
        KLM Royal Dutch Airlines, founded in 1919, is the oldest airline in the
        world still operating under its original name. Based in Amsterdam, it
        offers a wide range of international flights and is known for its
        excellent service and modern fleet.
      </Info>
    </KLMPage>
  );
}

export default KLM;
