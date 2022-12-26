import { useEffect, useState } from "react";
import useSubject from "../../Hooks/useSubject";
import ProgramsForm from "../../Organisms/ProgramsForm/ProgramsForm";
import { SelectOption } from "../../Types/Types";
import { ProgramsViewWrapper } from "./ProgramsView.styles";

const ProgramsView = () => {
  const { handleGetAllSubjects } = useSubject();
  const [subjects, setSubjects] = useState<SelectOption[] | undefined>(
    undefined
  );

  useEffect(() => {
    handleGetAllSubjects()
      .then((response) => {
        const data = response.data as SelectOption[];
        setSubjects(data);
      })
      .catch((e) => {
        console.log(e);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ProgramsViewWrapper>
      {subjects && <ProgramsForm subjects={subjects} />}
    </ProgramsViewWrapper>
  );
};

export default ProgramsView;
