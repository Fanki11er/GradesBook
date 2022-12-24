import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ParentViewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
`;

export const SectionsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  justify-content: center;
  column-gap: 80px;
  justify-self: center;
  padding: 0 50px;
`;
