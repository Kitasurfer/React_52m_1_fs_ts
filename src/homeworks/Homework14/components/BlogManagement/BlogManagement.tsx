import { useState, useContext } from "react";
import { BlogContext } from "../../BlogContext";
import Card from "../Card/Card";
import { Container, Input, Button } from "./styles";
import { log } from "console";



function BlogManagement() {
  const [inputValue, setInputValue] = useState<string>("");
  const blogContext = useContext(BlogContext);

  if (!blogContext) {
    throw new Error("BlogManagement должен использоваться внутри BlogProvider");
  }

  const { setPostedMessage } = blogContext;

  const handlePost = () => {
    if (inputValue.trim()) {
      setPostedMessage(inputValue);
      setInputValue("");
    }
  };

	

  return (
    <Container>
      <Input
        type="text"
        placeholder="Введите сообщение"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handlePost}>Post</Button>
      <Card />
    </Container>
  );
};

export default BlogManagement;
