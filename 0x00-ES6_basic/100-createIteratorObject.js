export default function createIteratorObject(report) {
  const myarray = [];
  for (let item of Object.values(report.allEmployees)) {
    myarray.push(...item);
  }

  return myarray;
}

