import './styles.css';

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

function Input({ label, name, type = "text", placeholder }: InputProps) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="custom-input"
      />
    </div>
  );
}

export default Input;