import {
  CheckboxFieldLabel,
  CheckBoxFieldWrapper,
  CheckboxInput,
} from "./CheckboxField.styled";

type Props = {
  name: string;
  value: string;
  label: string;
};

const CheckboxField = (props: Props) => {
  const { name, value, label } = props;
  return (
    <CheckBoxFieldWrapper>
      <CheckboxFieldLabel>{label}</CheckboxFieldLabel>
      <CheckboxInput type={"checkbox"} value={value} name={name} />
    </CheckBoxFieldWrapper>
  );
};

export default CheckboxField;
