import styled from "styled-components";
import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { StyledTheme } from "../../GlobalStyles/theme";

export const StyledListWrapper = styled(DefaultListWrapper)`
  grid-auto-rows: 150px;
`;

export const ParentViewAnnouncementsListWrapper = styled.li`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 30px;
  //row-gap: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.greenTable};
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.gray};
  border-radius: 10px;
  margin: 0;
  padding: 10px;
`;

export const ParentViewAnnouncementsListSpan = styled.span`
  //height: 100%;
  margin: 0;
`;

export const ParentViewAnnouncementsListParagraph = styled.p`
  margin: 0;
`;
