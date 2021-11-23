import { InputContainer, StyledInput, Label } from "./Input.style";

export type InputProps = {
  id: string;
  label: string;
  type?: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput id={id} {...props} />
    </InputContainer>
  );
};

export default Input;
