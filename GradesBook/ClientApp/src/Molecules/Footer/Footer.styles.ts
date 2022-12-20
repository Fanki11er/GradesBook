import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const FooterWrapper = styled.footer`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 30px;
  width: 100%;
  min-height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBorder};
`;

export const FooterText = styled.span`
  //display: flex;
`;

export const FooterYear = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
