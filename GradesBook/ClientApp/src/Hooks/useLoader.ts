import { useState } from "react";

const useLoader = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");

  const handleConnect = () => {
    setError("");
    setIsConnecting(true);
  };

  const handleError = (error: string) => {
    setError(error);
    setIsConnecting(false);
  };
  const handleFinished = () => {
    setIsConnecting(false);
  };

  const handleResetError = () => {
    setError("");
  };

  return {
    isConnecting,
    error,
    handleConnect,
    handleError,
    handleFinished,
    handleResetError,
  };
};

export default useLoader;
