import styled from "styled-components";

export const ClassSettingsFormWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  padding: 50px 50px;
  grid-template-columns: 1fr;
  row-gap: 50px;
  grid-auto-rows: auto;
  justify-items: center;
`;

export const ClassSettingHeaderWrapper = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 15px;
  align-items: center;
  justify-self: flex-start;
`;

export const ClassSettingHeaderText = styled.h2`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  margin: 0;
`;

export const ImgClassSetting = styled.img`
  width: 40px;
  height: 40px;
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
  align-items: center;
  width: fit-content;
`;

export const ClassSettingText = styled.span`
  display: flex;
  align-items: flex-start;
  width: fit-content;
`;

export const ClassStudentsListWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;
