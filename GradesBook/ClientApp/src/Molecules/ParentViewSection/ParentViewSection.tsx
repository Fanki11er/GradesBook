import { PropsWithChildren } from "react";
import {
  ParentViewSectionHeader,
  ParentViewSectionWrapper,
} from "./ParentViewSection.styles";

type Props = {
  label: string;
};

const ParentViewSection = (props: Props & PropsWithChildren) => {
  const { label } = props;

  return (
    <ParentViewSectionWrapper>
      <ParentViewSectionHeader>{label}</ParentViewSectionHeader>
      {props.children}
    </ParentViewSectionWrapper>
  );
};

export default ParentViewSection;
