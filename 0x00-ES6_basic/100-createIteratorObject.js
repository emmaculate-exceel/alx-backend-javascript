export default function createItertorObject(report) {
    return (function* _() {
	for (const department of Object.values(report.allEmployees)) {
	    for (const employee of department) {
		yield employee;
	    }
	}
    }());
}
