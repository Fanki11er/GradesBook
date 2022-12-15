import { useNavigate } from "react-router-dom";
import { Button } from "../../Atoms/Buttons/Buttons";
import InputField from "../../Molecules/InputField/InputField";
import { routes } from "../../Routes/routes";
import { LoginFormWrapper, LoginHeader } from "./LoginForm.styles";
import { useState } from "react";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialVlaues: MyFormValues = { email: "", password: "" };
  const { register } = routes;

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (values: MyFormValues) => {
    console.log("test");
    setError("");
    navigate(register, { replace: true });
  };

  return (
    <Formik
      initialValues={initialVlaues}
      onSubmit={(values, action) => {
        handleSubmit(values);

        action.setSubmitting(false);
      }}
    >
      <LoginFormWrapper>
        <LoginHeader>Logowanie</LoginHeader>
        {error ? (
          <FormError>
            Podane dane są nieprawidłowe. <br />
            Upewnij się, że podane email i hasło są poprawne
          </FormError>
        ) : null}
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
        <Button type="submit">Zaloguj</Button>
      </LoginFormWrapper>
    </Formik>
  );
};

export default LoginForm;
