const useHelpers = () => {
  const transformStringToNumbers = (items: string[]) => {
    return items.map((item) => {
      return Number(item);
    });
  };
  return {
    transformStringToNumbers,
  };
};

export default useHelpers;
