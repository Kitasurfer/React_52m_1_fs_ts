export interface InputProps {
  label?: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'tel' | 'url';
  placeholder?: string;
	id?: string
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}