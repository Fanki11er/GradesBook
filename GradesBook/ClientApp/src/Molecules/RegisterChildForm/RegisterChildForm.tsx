import { Formik } from "formik";
import { FormButtonCancel, FormButtonOk } from "../../Atoms/Buttons/Buttons";

import { FormButtonsWrapper } from "../../Atoms/FormButtonsWrapper/FormButtonsWrapper";
import InputField from "../InputField/InputField";
import { FormHeader } from "../ParentViewSection/FormHeader/FormHeader";
import {
  RegisterChildFormInputsWrapper,
  RegisterChildFormWrapper,
} from "./RegisterChildForm.styles";

type Props = {
  handleModalToggle: () => void;
};
type MyFormValues = {};

const RegisterChildForm = (props: Props) => {
  const { handleModalToggle } = props;
  const initialValues: MyFormValues = {};

  const handleSubmit = (values: MyFormValues) => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <RegisterChildFormWrapper>
        <FormHeader>Register children</FormHeader>
        <RegisterChildFormInputsWrapper>
          <InputField name="name" placeholder="Imię" label="Imię" />
          <InputField name="name" placeholder="Nazwisko" label="Nazwisko" />
          <InputField
            name="email"
            placeholder="Email"
            label="Email"
            //inputRef={emailInput}
            type="email"
          />
          <InputField
            name="password"
            placeholder="Hasło"
            label="Hasło"
            type="password"
          />
          <InputField
            name="repeatpassword"
            placeholder="Powtórz hasło"
            label="Powtórz hasło"
            type="password"
          />
        </RegisterChildFormInputsWrapper>
        <FormButtonsWrapper>
          <FormButtonOk type={"submit"}>Register</FormButtonOk>
          <FormButtonCancel onClick={handleModalToggle}>Back</FormButtonCancel>
        </FormButtonsWrapper>
      </RegisterChildFormWrapper>
    </Formik>
  );
};

export default RegisterChildForm;
