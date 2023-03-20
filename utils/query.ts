import * as R from 'ramda';

const getQueryStringOrDefault = (
  value: string | string[] | undefined,
  defaultValue: string
) => {
  if (value === undefined || value === '' || value.length === 0) {
    return defaultValue;
  } else {
    return value as string;
  }
};

const getQueryNumberOrDefault = (
  value: string | string[] | undefined,
  defaultValue: number
) => {
  const num = parseInt(value as string);
  if (isNaN(num)) {
    return defaultValue;
  } else {
    return num;
  }
};

const isNilOrEmpty = (value: any) => R.isNil(value) || R.isEmpty(value);

const isNotNilAndNotEmpty = R.complement(isNilOrEmpty);

export {
  getQueryStringOrDefault,
  getQueryNumberOrDefault,
  isNilOrEmpty,
  isNotNilAndNotEmpty,
};
