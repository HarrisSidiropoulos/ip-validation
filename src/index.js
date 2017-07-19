/* eslint-disable no-useless-escape */
function isValidIP(str) {
  return new RegExp('^(?:(?:2(?:[0-4][0-9]|5[0-5])|1?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|1?[0-9]?[0-9]))$').test(str);
}

export default isValidIP;
