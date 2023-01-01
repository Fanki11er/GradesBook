import { useEffect, useState } from "react";
import useClass from "../../Hooks/useClass";
import ClassSettingsForm from "../../Organisms/ClassSettingsForm/ClassSettingsForm";
import { ClassWithStudentsAndProgram } from "../../Types/Types";
import { ClassSettingsWrapper } from "./ClassSettings.styles";

const ClassSettings = () => {
  const [classCurrentSettings, setCurrentClassSettings] =
    useState<ClassWithStudentsAndProgram | null>(null);
  /*const [studentsWithoutClass, setStudentsWithoutClass] = useState<
    SelectOption[]
  >([]);*/

  const { getClassSettings } = useClass();

  const getData = () => {
    getClassSettings()
      .then((response) => {
        const classStudents = response.data;

        setCurrentClassSettings(classStudents);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClassSettingsWrapper>
      {classCurrentSettings && (
        <ClassSettingsForm classSettings={classCurrentSettings} />
      )}
    </ClassSettingsWrapper>
  );
};

export default ClassSettings;
