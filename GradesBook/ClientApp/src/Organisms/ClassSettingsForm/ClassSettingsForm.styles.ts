import styled from "styled-components";

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
  color: white;
`;

//export const ImgClassSetting = styled.img``;
export const ImgClassSetting = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 0 20px;
`;

export const ClassSettingText = styled.span`
  color: white;
`;

export const ListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  ///justify-self: center;
  justify-items: center;
  background-color: red;
`;

export const ButtonWrapper = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
