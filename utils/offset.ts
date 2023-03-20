const calcOffset = (limit: number, page: number): number => {
  return limit * (page - 1);
};

export {calcOffset};
