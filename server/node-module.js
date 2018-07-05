const uuidv4 = require('uuid/v4');

export const userToken = () => {
  return uuidv4();
};
