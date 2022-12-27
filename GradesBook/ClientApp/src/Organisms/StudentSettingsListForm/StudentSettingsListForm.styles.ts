import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const StudentSettingsListFormWrapper = styled.ul`
  width: 300px;
  height: 500px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
`;

export const StudentSettingsList = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 15px;
`;

export const StudentSettingsListText = styled.span``;

export const StudentSettingsCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;
