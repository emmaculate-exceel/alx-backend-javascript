/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;

    if (trueOrFalse) {
	const task = true;
	const task = false;
    }

    return [task, task2];
}
