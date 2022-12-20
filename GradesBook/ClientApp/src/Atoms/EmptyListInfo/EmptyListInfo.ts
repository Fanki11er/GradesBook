import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const EmptyListInfo = styled.span`
  width: fit-content;
  height: auto;
  display: flex;
  justify-self: center;
  align-self: center;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
`;
