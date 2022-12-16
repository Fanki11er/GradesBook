import { ButtonGrades } from "../../../Atoms/Buttons/Buttons";
import { DefaultListWrapper } from "../../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { EmptyListInfo } from "../../../Atoms/EmptyListInfo/EmptyListInfo";
import { StudentsWithClassAndGradesAverage } from "../../../Types/Types";
import {
  ParentViewChildrenListElement,
  StudentAverageInfo,
  StudentClassInfo,
  StudentNameInfo,
} from "./ParentViewChildrenList.styles";

type Props = {
  childrenList: StudentsWithClassAndGradesAverage[];
};

const ParentViewChildrenList = (props: Props) => {
  const { childrenList } = props;
  const renderChildrenList = (
    childrenList: StudentsWithClassAndGradesAverage[]
  ) => {
    return childrenList.map((children) => {
      return (
        <ParentViewChildrenListElement key={children.studentId}>
          <StudentAverageInfo average={children.gradesAverage}>
            {children.gradesAverage}
          </StudentAverageInfo>
          <StudentNameInfo>{children.studentName}</StudentNameInfo>
          <StudentClassInfo>
            {children.className ? children.className : ""}
          </StudentClassInfo>
          <ButtonGrades>Oceny</ButtonGrades>
        </ParentViewChildrenListElement>
      );
    });
  };
  return (
    <DefaultListWrapper>
      {childrenList.length ? (
        renderChildrenList(childrenList)
      ) : (
        <EmptyListInfo>No children registered</EmptyListInfo>
      )}
    </DefaultListWrapper>
  );
};

export default ParentViewChildrenList;
