export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;

    if (trueOrFalse) {
	let task = true;
	let task = false;
    }

    return [task, task2];
}
