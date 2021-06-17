import _ from 'lodash';

export const createHtml = (arr) => {
  const str = _.join(arr);

  return str;
}
