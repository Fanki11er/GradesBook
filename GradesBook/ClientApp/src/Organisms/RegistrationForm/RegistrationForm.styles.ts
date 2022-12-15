import styled from "styled-components";
import { Form } from "formik";

export const RegistrationFormWrapper = styled(Form)`
  display: grid;
  grid-row-gap: 15px;
  grid-auto-columns: 1fr;
  grid-auto-rows: 60px;
  justify-items: center;
  width: 400px;
  height: auto;
  padding: 30px 0;
  background-color: rgba(217, 217, 217, 1);
`;

export const RegistrationHeader = styled.h2``;
