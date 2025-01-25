export interface ButtonProps {
  name?: string;
  type: 'submit' | 'button' | 'reset';
  onClick: () => void;
  className?: string; // Добавляем пропс для класса
}