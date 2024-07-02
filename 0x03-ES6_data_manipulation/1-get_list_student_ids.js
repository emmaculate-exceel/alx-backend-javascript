export default function getListStudentIds(input = []) {
  if (Array.isArray(input)) {
    return input.map((student) => {
      return student.id});
  }
  return [];
}
