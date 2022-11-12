import { ClassNameWithSupervisor } from "../../Types/Types";
import {
  ClassesListWrapper,
  ImgList,
  ListRowClass,
  ListText,
} from "./ClassesList.styles";
type Props = {
  classList: ClassNameWithSupervisor[];
};
const ClassesList = (props: Props) => {
  const { classList } = props;

  const renderClassList = (classList: ClassNameWithSupervisor[]) => {
    return classList.map((classElement, index) => {
      return (
        <ListRowClass key={index}>
          <ListText>{classElement.name}</ListText>
          <ListText>{`Uczniowie: ${classElement.studentsNumber}`}</ListText>
          <ImgList />
          <ListText>{`Wychowawca: ${
            classElement.supervisorName ? classElement.supervisorName : " "
          }`}</ListText>
        </ListRowClass>
      );
    });
  };

  return <ClassesListWrapper>{renderClassList(classList)}</ClassesListWrapper>;
};

export default ClassesList;
