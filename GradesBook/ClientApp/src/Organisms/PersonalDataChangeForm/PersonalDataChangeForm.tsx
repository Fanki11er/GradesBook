import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { FormError } from "../../Atoms/FormError/FormError";
import useLoader from "../../Hooks/useLoader";
import useUser from "../../Hooks/useUser";
import useUserSettings from "../../Hooks/useUserSettings";
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

  const {
    handleConnect,
    error,
    handleFinished,
    handleError,
    handleResetError,
    isConnecting,
  } = useLoader();

  const { handleSetNewUserSettings } = useUserSettings();
  const { handleLogout } = useUser();
  const initialValues: MyFormValues = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: "",
    oldPassword: "",
    repeatedPassword: "",
  };
  const handleSubmit = (values: MyFormValues) => {
    handleResetError();
    handleConnect();
    handleSetNewUserSettings({
      Email: values.email,
      FirstName: values.firstName,
      LastName: values.lastName,
      Password: values.password,
      RepeatedPassword: values.repeatedPassword,
      OldPassword: values.oldPassword,
    })
      .then(() => {
        handleFinished();
      })
      .catch((e) => {
        handleError(e.message);
      });
  };

  const validateForm = (values: MyFormValues) => {
    handleResetError();
    if (values.password !== values.repeatedPassword) {
      handleError("Hasła muszą się zgadzać");
      return false;
    }
    if (
      values.email === email &&
      values.firstName === firstName &&
      values.lastName === lastName
    ) {
      handleError("Nie dokonano żadnych zmian");
      return false;
    }
    const entries = Object.values(values);
    for (let i = 0; i < entries.length; i++) {
      if (!entries[i]) {
        handleError("Wszystkie pola są wymagane");
        return false;
      }
    }
    return true;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        if (validateForm(values)) {
          handleSubmit(values);
          if (!isConnecting && !error) {
            handleLogout();
          }
        }

        actions.setSubmitting(false);
      }}
    >
      <PersonalDataChangeFormWrapper>
        <PersonalDataChangeFormHeader>Zmień dane</PersonalDataChangeFormHeader>
        {error ? <FormError>{error}</FormError> : null}
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
