/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
