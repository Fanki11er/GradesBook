import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const AddProgramFormWrapper = styled(Form)`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 40px 25px;
  grid-template-rows: 30px 1fr 30px;
  grid-template-columns: 1fr;
  width: 450px;
  height: fit-content;
  max-height: 550px;
  border-radius: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  row-gap: 40px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
`;

export const AddProgramFormHeader = styled.h2`
  margin: 0;
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
  color: ${(props: StyledTheme) => props.theme.colors.headerAnnouncement};
`;

export const AddProgramFormInputsWrapper = styled.div`
  width: 90%;
  min-width: 200px;
  height: 100%;
  display: grid;
  grid-auto-rows: auto;
  row-gap: 10px;
  grid-template-columns: 100%;
  justify-self: center;
  padding: 0 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
    background-color: ${(props: StyledTheme) => props.theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props: StyledTheme) =>
      props.theme.colors.menuBackground};
    border-radius: 15px;
    border: 1px solid;
  }
`;

export const SubjectCheckboxWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 120px 50px;
  justify-items: center;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  column-gap: 10px;
  padding: 0 15px;
  border-bottom: 2px solid
    ${(props: StyledTheme) => props.theme.colors.lightBorder};
  align-items: center;
  transition: all 0.3s;

  /*:hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    border-radius: 10px;
    cursor: pointer;
  }*/
`;

/*export const ProgramsHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 70px 0 0;
`;
export const ProgramsHeaderText = styled.h2``;

export const ImgPrograms = styled.img`
  width: 30px;
  height: 30px;
`;

export const ProgramsText = styled.span`
  //color: white;
`;

export const ProgramsHeaderSmall = styled.h3`
  color: white;
`;*/
