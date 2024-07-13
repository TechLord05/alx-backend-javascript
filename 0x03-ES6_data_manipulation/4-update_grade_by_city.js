export default function updateStudentGradeByCity(city, newGrades) {
  return newGrades.map((student) => {
    updateStudent = student.filter((st) => {
        if (st.location.city === city) {
            if (!st.grade) {
                st.grade = 'N/A';
            } else {
                st.grade = st.grade;
            };
        };
    });
    return updateStudent;
  });
}