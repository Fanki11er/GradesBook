import {
  RadioFieldLabel,
  RadioFieldWrapper,
  RadioInput,
} from "./RadioField.styled";

type Props = {
  name: string;
  value: string;
  label: string;
};

const RadioField = (props: Props) => {
  const { name, value, label } = props;
  return (
    <RadioFieldWrapper>
      <RadioFieldLabel>{label}</RadioFieldLabel>
      <RadioInput type={"radio"} value={value} name={name} />
    </RadioFieldWrapper>
  );
};

export default RadioField;
