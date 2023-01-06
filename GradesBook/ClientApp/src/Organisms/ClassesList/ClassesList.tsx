import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { ClassNameWithSupervisor } from "../../Types/Types";
import { ImgList, ListRowClass, ListText } from "./ClassesList.styles";
import TeacherIcon from "../../Assets/Images/Teacher.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Routes/routes";
type Props = {
  classList: ClassNameWithSupervisor[];
};
const ClassesList = (props: Props) => {
  const { classList } = props;
  const { teacherView, classes } = routes;
  const navigate = useNavigate();

  const renderClassList = (classList: ClassNameWithSupervisor[]) => {
    return classList.map((classElement) => {
      return (
        <ListRowClass
          key={classElement.id}
          onClick={() =>
            navigate(`${teacherView}${classes}/${classElement.id}`)
          }
        >
          <ListText>{classElement.name}</ListText>
          <ListText>{`Uczniowie: ${classElement.studentsNumber}`}</ListText>
          <ImgList src={TeacherIcon} alt={"Ikona nauczyciela"} />
          <ListText>
            {classElement.supervisorName !== " "
              ? classElement.supervisorName
              : "Brak wychowawcy "}
          </ListText>
        </ListRowClass>
      );
    });
  };

  return <DefaultListWrapper>{renderClassList(classList)}</DefaultListWrapper>;
};

export default ClassesList;
