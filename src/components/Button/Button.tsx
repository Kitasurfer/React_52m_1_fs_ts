import "./styles.css";
import { ButtonProps } from "./types";

function Button({ 
  name = "SEND", 
  type, 
  onClick, 
  className 
}: ButtonProps) {
  return (
    <button 
      className={`main-button ${className || ""}`} // Добавляем переданный класс
      type={type} 
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;