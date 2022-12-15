import { useState } from "react";

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  return {
    handleToggleModal,
    isOpened,
  };
};

export default useModal;
