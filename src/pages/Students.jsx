import React, { useState } from "react";
import AddStudentForm from "../components/AddStudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container">
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} />
    </div>
  );
}

export default Students;
