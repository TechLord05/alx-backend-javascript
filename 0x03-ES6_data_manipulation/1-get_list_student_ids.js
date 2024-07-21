export default function getListStudentsIds(ListOfStudents) {
  if (!Array.isArray(ListOfStudents)) {
    return [];
  }
  return ListOfStudents.map((obj) => obj.id);
}
