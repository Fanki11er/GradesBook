import {
  DateInput,
  DateInputFieldWrapper,
  DateInputLabel,
} from "./DateInputField.styles";

type Props = {
  name: string;
  label: string;
};

const DateInputField = (props: Props) => {
  const { name, label } = props;
  return (
    <DateInputFieldWrapper>
      <DateInputLabel>{label}</DateInputLabel>
      <DateInput type={"date"} name={name} />
    </DateInputFieldWrapper>
  );
};

export default DateInputField;
