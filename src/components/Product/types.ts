export interface ButtonProps {
  name?: string,
  type: 'submit' | 'button' | 'reset',
  onClick: () => void
}

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
