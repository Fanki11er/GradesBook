import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
//import { endpoints } from "../../Api/Endpoints";
import useLoader from "../../Hooks/useLoader";
import InputField from "../../Molecules/InputField/InputField";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import { SelectOption } from "../../Types/Types";
import {
  ClassCreationFormWrapper,
  FormButtonOkWrapper,
} from "./ClassCreationForm.styles";

type Props = {
  teachers: SelectOption[];
  programs: SelectOption[];
};
type MyFormValues = {
  name: string;
  supervisorId: number;
  programId: number;
};

const ClassCreationForm = (props: Props) => {
  const { programs, teachers } = props;
  const { handleResetError } = useLoader();
  const initialValues: MyFormValues = {
    name: "",
    supervisorId: -1,
    programId: -1,
  };

  const validateFormValues = (values: MyFormValues) => {
    handleResetError();
    const entries = Object.values(values);
  };

  const handleSubmit = (values: MyFormValues) => {
    validateFormValues(values);
    //!!!!!!!!!!!!!!!! Change to axios Private
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
      <ClassCreationFormWrapper>
        <InputField name={"name"} label={"Nazwa"} placeholder={"Nazwa klasy"} />
        <SelectInputField
          label={"Wybierz program"}
          name={"programId"}
          options={programs}
          placeholder={"Wybierz program"}
          disabled={false}
        />
        <SelectInputField
          label={"Wybierz wychowawcę"}
          name={"supervisorId"}
          options={teachers}
          placeholder={"Wybierz wychowawcę"}
          disabled={false}
        />
        <FormButtonOkWrapper>
          <FormButtonOk>Dodaj</FormButtonOk>
        </FormButtonOkWrapper>
      </ClassCreationFormWrapper>
    </Formik>
  );
};

export default ClassCreationForm;
