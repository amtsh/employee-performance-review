export const getIn = (key, obj) => {
  const keysList = isString(key) ? key.split(".") : key;
  return keysList.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
};

export const isString = value => {
  return typeof value === "string" || value instanceof String;
};
