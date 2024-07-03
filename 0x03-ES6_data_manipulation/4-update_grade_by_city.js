export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(student => student.location === city);

  const updatedStudents = filteredStudents.map(student => {
    const gradeObject = newGrades.find(grade => grade.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Return updated student object
    return {
      ...student,
      grade: grade
    };
  });

  return updatedStudents;
}
