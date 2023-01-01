import { ClassNameWithSupervisor } from "../../Types/Types";
import ClassesList from "../ClassesList/ClassesList";
import { ClassesFormWrapper, ClassSectionHeader } from "./ClassesForm.styles";

type Props = {
  classes: ClassNameWithSupervisor[];
};
const ClassesForm = (props: Props) => {
  const { classes } = props;

  return (
    <ClassesFormWrapper>
      <ClassSectionHeader>Klasy</ClassSectionHeader>
      <ClassesList classList={classes} />
    </ClassesFormWrapper>
  );
};

export default ClassesForm;
