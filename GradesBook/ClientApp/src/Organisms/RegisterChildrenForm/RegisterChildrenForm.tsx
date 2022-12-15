import { Button } from "../../Atoms/Buttons/Buttons";
import { RegisterChildrenFormWrapper } from "./RegisterChildrenForm.styles";

type Props = {
  handleModalToggle: () => void;
};
const RegisterChildrenForm = (props: Props) => {
  const { handleModalToggle } = props;
  return (
    <RegisterChildrenFormWrapper>
      <div></div>
      <Button onClick={handleModalToggle}>Back</Button>
    </RegisterChildrenFormWrapper>
  );
};

export default RegisterChildrenForm;
