import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import LoginForm from "../../Organisms/LoginForm/LoginForm";
import { LoginViewWrapper } from "./LoginView.styles";

const LoginView = () => {
  const { handleDeleteAuth } = useAuth();

  useEffect(() => {
    handleDeleteAuth();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LoginViewWrapper>
      <LoginForm />
    </LoginViewWrapper>
  );
};

export default LoginView;
