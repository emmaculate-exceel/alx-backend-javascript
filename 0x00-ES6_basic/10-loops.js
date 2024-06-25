/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
