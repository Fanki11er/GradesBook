import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassSettingsFormWrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 50px 50px;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  align-items: center;
`;

export const ClassSettingHeaderWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-self: center;
`;

export const ClassSettingHeaderText = styled.h2`
  display: flex;
  align-items: flex-start;
  width: 150px;
`;

export const ImgClassSetting = styled.img`
  width: 40px;
  height: 40px;
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 0 20px;
`;

export const ClassSettingText = styled.span`
  display: flex;
  align-items: flex-start;
  width: 270px;
`;

export const ListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const ButtonWrapper = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
