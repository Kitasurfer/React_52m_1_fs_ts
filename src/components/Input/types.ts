export interface ButtonProps {
  name?: string,
  type: 'submit' | 'button' | 'reset',
  onClick: () => void
}

export interface InputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}
