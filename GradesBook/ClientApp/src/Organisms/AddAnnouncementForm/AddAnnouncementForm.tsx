import { AxiosResponse } from "axios";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import TextAreaField from "../../Molecules/TextAreaField/TextAreaField";
import { AddAnnouncementFormWrapper } from "./AddAnnouncementForm.styles";

type Props = {
  submitFunction: (
    content: string,
    id?: number
  ) => Promise<AxiosResponse<any, any>>;
};

type MyFormValues = {
  content: string;
};

const AddAnnouncementForm = (props: Props) => {
  const { classId } = useParams();
  const { submitFunction } = props;
  const initialValues: MyFormValues = { content: "" };
  const handleSubmit = (values: MyFormValues) => {
    submitFunction(values.content, classId ? Number(classId) : undefined)
      .then(() => {})
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <AddAnnouncementFormWrapper>
        <TextAreaField name={"content"} label={"Dodaj ogłoszenie"} />
        <FormButtonOk type={"submit"}>Publikuj</FormButtonOk>
      </AddAnnouncementFormWrapper>
    </Formik>
  );
};
export default AddAnnouncementForm;
