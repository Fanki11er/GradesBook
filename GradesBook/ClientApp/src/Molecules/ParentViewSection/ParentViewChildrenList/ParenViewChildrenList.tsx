import { ButtonGrades } from "../../../Atoms/Buttons/Buttons";
import { DefaultListWrapper } from "../../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { StudentsWithGradesAverage } from "../../../Types/Types";
import {
  ParentViewChildrenListElement,
  StudentAverageInfo,
  StudentNameInfo,
} from "./ParentViewChildrenList.styles";

type Props = {
  childrenList: StudentsWithGradesAverage[];
};

const ParentViewChildrenList = (props: Props) => {
  const { childrenList } = props;
  const renderChildrenList = (childrenList: StudentsWithGradesAverage[]) => {
    return childrenList.map((children) => {
      return (
        <ParentViewChildrenListElement key={children.studentId}>
          <StudentAverageInfo>{children.gradesAverage}</StudentAverageInfo>
          <StudentNameInfo>{children.studentName}</StudentNameInfo>
          <ButtonGrades>Oceny</ButtonGrades>
        </ParentViewChildrenListElement>
      );
    });
  };
  return (
    <DefaultListWrapper>{renderChildrenList(childrenList)}</DefaultListWrapper>
  );
};

export default ParentViewChildrenList;
