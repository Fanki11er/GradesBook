import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { FormError } from "../../Atoms/FormError/FormError";
import InputField from "../../Molecules/InputField/InputField";
import { UserCurrentSettingsDto } from "../../Types/Types";
import {
  PersonalDataChangeFormHeader,
  PersonalDataChangeFormInputsWrapper,
  PersonalDataChangeFormWrapper,
} from "./PersonalDataChangeForm.styles";
type Props = {
  currentSettings: UserCurrentSettingsDto;
};

type MyFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  oldPassword: string;
  repeatedPassword: string;
};

const PersonalDataChangeForm = (props: Props) => {
  const {
    currentSettings: { email, firstName, lastName },
  } = props;
  const initialValues: MyFormValues = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: "",
    oldPassword: "",
    repeatedPassword: "",
  };
  const handleSubmit = (values: MyFormValues) => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <PersonalDataChangeFormWrapper>
        <PersonalDataChangeFormHeader>Zmień dane</PersonalDataChangeFormHeader>
        {false ? <FormError>Podane dane są nieprawidłowe.</FormError> : null}
        <PersonalDataChangeFormInputsWrapper>
          <InputField name="firstName" placeholder="Imię" label="Imię" />
          <InputField name="lastName" placeholder="Nazwisko" label="Nazwisko" />
          <InputField
            name="email"
            placeholder="example@student.school.com"
            label="Email"
            type="email"
          />
          <InputField
            name="oldPassword"
            placeholder="Stare hasło"
            label="Stare hasło"
            type="password"
          />

          <InputField
            name="password"
            placeholder="Nowe hasło"
            label="Nowe hasło"
            type="password"
          />
          <InputField
            name="repeatedPassword"
            placeholder="Powtórz hasło"
            label="Powtórz hasło"
            type="password"
          />
        </PersonalDataChangeFormInputsWrapper>
        <FormButtonOk type={"submit"}>Zmień</FormButtonOk>
      </PersonalDataChangeFormWrapper>
    </Formik>
  );
};

export default PersonalDataChangeForm;
