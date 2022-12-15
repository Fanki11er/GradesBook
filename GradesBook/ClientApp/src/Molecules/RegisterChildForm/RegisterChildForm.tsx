import { AxiosError } from "axios";
import { Formik } from "formik";
import axios from "../../Api/axios";
import { endpoints } from "../../Api/Endpoints";
import { FormButtonCancel, FormButtonOk } from "../../Atoms/Buttons/Buttons";

import { FormButtonsWrapper } from "../../Atoms/FormButtonsWrapper/FormButtonsWrapper";
import { FormError } from "../../Atoms/FormError/FormError";
import useLoader from "../../Hooks/useLoader";
import { RegisterUserDto } from "../../Types/Types";
import InputField from "../InputField/InputField";
import { FormHeader } from "../ParentViewSection/FormHeader/FormHeader";
import SmallLoader from "../SmallLoader/SmallLoader";
import {
  RegisterChildFormInputsWrapper,
  RegisterChildFormWrapper,
} from "./RegisterChildForm.styles";

type Props = {
  handleModalToggle: () => void;
  refreshData: () => void;
};
type MyFormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

const RegisterChildForm = (props: Props) => {
  const { handleModalToggle, refreshData } = props;
  const { registerParentsChildren } = endpoints;
  const {
    isConnecting,
    error,
    handleConnect,
    handleError,
    handleFinished,
    handleResetError,
  } = useLoader();
  const initialValues: MyFormValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatedPassword: "",
  };

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

    if (!values.email.match(/.+@student.school.pl/)) {
      handleError("Wymagana domena @student.school.com ");
      return;
    }
  };

  const handleSubmit = (values: MyFormValues) => {
    validateFormValues(values);

    //!!!!!!!!!!!!!!!! Change to axios Private
    if (!error) {
      handleConnect();
      axios
        .post(registerParentsChildren, {
          name: values.name,
          surname: values.surname,
          password: values.password,
          repeatedPassword: values.repeatedPassword,
        } as RegisterUserDto)
        .then(() => {
          handleFinished();
          refreshData();
          handleModalToggle();
        })
        .catch((e: AxiosError) => {
          handleError(e.message);
        });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      <RegisterChildFormWrapper>
        <FormHeader>Register children</FormHeader>
        {error && <FormError>{"Error"}</FormError>}
        <RegisterChildFormInputsWrapper>
          <InputField name="name" placeholder="Imię" label="Imię" />
          <InputField
            name="surnamedName"
            placeholder="Nazwisko"
            label="Nazwisko"
          />
          <InputField
            name="email"
            placeholder="example@student.school.com"
            label="Email"
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
        {isConnecting ? (
          <SmallLoader />
        ) : (
          <FormButtonsWrapper>
            <FormButtonOk type={"submit"}>Register</FormButtonOk>
            <FormButtonCancel onClick={handleModalToggle}>
              Back
            </FormButtonCancel>
          </FormButtonsWrapper>
        )}
      </RegisterChildFormWrapper>
    </Formik>
  );
};

export default RegisterChildForm;
