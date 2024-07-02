export default function getListStudentIds(input = []) {
  if (Array.isArray(input)) {
    return input.map((student) => student.id);
  }
  return [];
}
