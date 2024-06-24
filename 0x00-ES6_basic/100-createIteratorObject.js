export default function createItertorObject(report) {
    const myarray = [];
    for (const item of Object.values(report.allEmployees)) {
	myarray.push(...item);
    }

    return myarray;
}
