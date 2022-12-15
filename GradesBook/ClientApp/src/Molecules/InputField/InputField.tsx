import { InputWrapper } from "../../Atoms/Input/Input";
import { InputFieldWrapper, InputLabel } from "./InputField.style";

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputField = (props: InputProps) => {
  const { name, label, placeholder, type, inputRef } = props;
  return (
    <InputFieldWrapper>
      <InputLabel>{label}</InputLabel>
      <InputWrapper
        name={name}
        placeholder={placeholder}
        type={type ? type : "text"}
      />
    </InputFieldWrapper>
  );
};

export default InputField;
