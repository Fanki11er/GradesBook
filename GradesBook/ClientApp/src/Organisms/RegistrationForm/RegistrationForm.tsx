import { useNavigate } from "react-router-dom";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { routes } from "../../Routes/routes";
import {
  RegistrationFormWrapper,
  RegistrationHeader,
} from "./RegistrationForm.styles";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";
import InputField from "../../Molecules/InputField/InputField";
import { ButtonLoginWrapper } from "../LoginForm/LoginForm.styles";
import useLoader from "../../Hooks/useLoader";
import useAuth from "../../Hooks/useAuth";
import { RegisterUserDto } from "../../Types/Types";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword: string;
}
const RegistrationForm = () => {
  const { login } = routes;
  const {
    //isConnecting,
    error,
    handleConnect,
    handleError,
    handleFinished,
    handleResetError,
  } = useLoader();
  const { handleRegisterUser } = useAuth();

  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatedPassword: "",
  };

  const navigate = useNavigate();

  const validateFormValues = (values: MyFormValues) => {
    handleResetError();
    const entries = Object.values(values);
    for (let i = 0; i < entries.length; i++) {
      if (!entries[i]) {
        handleError("Wszystkie pola są wymagane");
        return;
      }
    }
    if (values.password !== values.repeatedPassword) {
      handleError("Hasła nie zgadzają się");
      return;
    }

    if (
      !values.email.match(/.+@parent.school.pl/) &&
      !values.email.match(/.+@teacher.school.pl/)
    ) {
      handleError("Wymagana domena @parent.school.pl lub @teacher.school.pl");
      return;
    }
  };

  const convertToDto = (values: MyFormValues): RegisterUserDto => {
    return {
      FirstName: values.firstName,
      LastName: values.lastName,
      Email: values.email,
      Password: values.password,
      RepeatedPassword: values.repeatedPassword,
    };
  };

  const handleSubmit = (values: MyFormValues) => {
    const dto = convertToDto(values);
    handleConnect();
    handleRegisterUser(dto)
      .then(() => {
        handleFinished();
        navigate(login);
      })
      .catch((e) => {
        handleError(e.message);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        validateFormValues(values);
        if (!error) {
          handleSubmit(values);
        }
        action.setSubmitting(false);
      }}
    >
      <RegistrationFormWrapper>
        <RegistrationHeader>Rejestracja</RegistrationHeader>
        {error ? <FormError>{error}</FormError> : null}
        <InputField name="firstName" placeholder="Imię" label="Imię" />
        <InputField name="lastName" placeholder="Nazwisko" label="Nazwisko" />
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
          name="repeatedPassword"
          placeholder="Powtórz hasło"
          label="Powtórz hasło"
          type="password"
        />
        <ButtonLoginWrapper>
          <FormButtonOk type={"submit"}>Zarejestruj</FormButtonOk>
        </ButtonLoginWrapper>
      </RegistrationFormWrapper>
    </Formik>
  );
};

export default RegistrationForm;
