import { useNavigate } from "react-router-dom";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import InputField from "../../Molecules/InputField/InputField";
import { routes } from "../../Routes/routes";
import {
  ButtonLoginWrapper,
  LoginFormWrapper,
  LoginHeader,
} from "./LoginForm.styles";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";
import useLoader from "../../Hooks/useLoader";
import useAuth from "../../Hooks/useAuth";
import { UserWithToken } from "../../Types/Types";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const { parentView, teacherView, studentView } = routes;

  const navigate = useNavigate();
  const { handleSetAuthenticatedUser, handleLoginUser } = useAuth();
  const { error, handleConnect, handleFinished, handleError } = useLoader();

  const handleSubmit = (values: MyFormValues) => {
    handleConnect();
    handleLoginUser({ Email: values.email, Password: values.password })
      .then((response) => {
        const user = response.data as UserWithToken;
        handleSetAuthenticatedUser(user);
        handleFinished();
        if (user.role === "Parent") {
          navigate(parentView);
        }
        if (user.role === "Teacher") {
          navigate(teacherView);
        }
        if (user.role === "Student") {
          navigate(studentView);
        }
      })
      .catch((e) => {
        handleError(e.message);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        handleSubmit(values);

        action.setSubmitting(false);
      }}
    >
      <LoginFormWrapper>
        <LoginHeader>Logowanie</LoginHeader>
        {error ? <FormError>{error}</FormError> : null}
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
        <ButtonLoginWrapper>
          <FormButtonOk type="submit">Zaloguj</FormButtonOk>
        </ButtonLoginWrapper>
      </LoginFormWrapper>
    </Formik>
  );
};

export default LoginForm;
