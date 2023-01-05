import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import useClass from "../../Hooks/useClass";
//import { endpoints } from "../../Api/Endpoints";
import useLoader from "../../Hooks/useLoader";
import InputField from "../../Molecules/InputField/InputField";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import { routes } from "../../Routes/routes";
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
  const { teacherView } = routes;
  const { handleAddNewClass } = useClass();
  const navigate = useNavigate();
  const {
    handleResetError,
    handleConnect,
    handleFinished,
    handleError,
    isConnecting,
    error,
  } = useLoader();
  const initialValues: MyFormValues = {
    name: "",
    supervisorId: 0,
    programId: 0,
  };

  const validateFormValues = (values: MyFormValues) => {
    handleResetError();
    if (!values.name.match(/^\d{1}[a-zA-Z]{1}$/)) {
      return false;
    }
    if (values.programId === 0 || values.supervisorId === 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = (values: MyFormValues) => {
    if (validateFormValues(values)) {
      handleConnect();
      handleAddNewClass({
        Name: values.name,
        ProgramId: values.programId,
        SupervisingTeacherId: values.supervisorId,
      })
        .then(() => {
          handleFinished();
          navigate(teacherView);
        })
        .catch((e) => {
          handleError(e.message);
          console.log(e.message);
        });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        if (!isConnecting && !error) {
        }
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
          <FormButtonOk type={"submit"}>Dodaj</FormButtonOk>
        </FormButtonOkWrapper>
      </ClassCreationFormWrapper>
    </Formik>
  );
};

export default ClassCreationForm;
