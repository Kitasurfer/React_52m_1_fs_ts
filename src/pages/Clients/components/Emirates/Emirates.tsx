import { EmiratesPage, Title, Info, Logo } from "./styles";

function Emirates() {
  return (
    <EmiratesPage>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png"
        alt="Emirates Logo"
      />
      <Title>Emirates Airlines</Title>
      <Info>
        Emirates is one of the world's largest airlines, based in Dubai, UAE.
        Founded in 1985, it operates a modern fleet and offers world-class
        services, connecting over 150 destinations worldwide.
      </Info>
    </EmiratesPage>
  );
}

export default Emirates;
