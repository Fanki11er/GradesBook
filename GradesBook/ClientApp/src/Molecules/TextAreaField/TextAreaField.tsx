import { useField } from "formik";
import {
  TextArea,
  TextAreaFieldLabel,
  TextAreaFieldWrapper,
} from "./TextAreaField.styles";

type Props = {
  name: string;
  label: string;
};

const TextAreaField = (props: Props) => {
  const { name, label } = props;
  const [field, meta] = useField(name);

  return (
    <TextAreaFieldWrapper>
      <TextAreaFieldLabel>{label}</TextAreaFieldLabel>
      <TextArea
        as={"textarea"}
        value={meta.value}
        onChange={field.onChange}
        name={name}
      />
    </TextAreaFieldWrapper>
  );
};

export default TextAreaField;
