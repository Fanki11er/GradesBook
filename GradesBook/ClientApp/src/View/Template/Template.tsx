import { Outlet } from "react-router-dom";
import Footer from "../../Molecules/Footer/Footer";
import Navigation from "../../Molecules/Navigation/Navigation";
import { TemplateWrapper } from "./Template.styles";

const Template = () => {
  return (
    <TemplateWrapper>
      <Navigation />
      <Outlet />
      <Footer />
    </TemplateWrapper>
  );
};

export default Template;
