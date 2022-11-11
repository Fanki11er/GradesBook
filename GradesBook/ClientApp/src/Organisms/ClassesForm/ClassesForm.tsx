import { Button } from "../../Atoms/Buttons/Buttons";
import {
  ClassesListWrapper,
  ImgList,
  ListRowClass,
  ListText,
} from "../ClassesList/ClassesList.styles";
import { ClassesFormWrapper, ClassesText } from "./ClassesForm.styles";

const ClassesForm = () => {
  return (
    <ClassesFormWrapper>
      <ClassesText>Klasy</ClassesText>
      <Button>Utwórz nową</Button>
      <ClassesListWrapper>
        <ListRowClass>
          <ListText>Klasa: 1A</ListText>
          <ListText>Uczniowie: 25</ListText>
          <ImgList />
          <ListText>Wychowawca: Jan Kowalski</ListText>
        </ListRowClass>
        <ListRowClass>
          <ListText>Klasa: 1A</ListText>
          <ListText>Uczniowie: 25</ListText>
          <ImgList />
          <ListText>Wychowawca: Jan Kowalski</ListText>
        </ListRowClass>
        <ListRowClass>
          <ListText>Klasa: 1A</ListText>
          <ListText>Uczniowie: 25</ListText>
          <ImgList />
          <ListText>Wychowawca: Jan Kowalski</ListText>
        </ListRowClass>
      </ClassesListWrapper>
    </ClassesFormWrapper>
  );
};

export default ClassesForm;
