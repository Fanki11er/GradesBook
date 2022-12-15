import { Outlet } from "react-router-dom";
import Footer from "../../Molecules/Footer/Footer";
import { TemplateWrapper } from "./Template.styles";

const Template = () => {
  return (
    <TemplateWrapper>
      <Outlet />
      <Footer />
    </TemplateWrapper>
  );
};

export default Template;
