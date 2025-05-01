import React, { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course || !grade) {
      setError("All fields are required.");
      return;
    }
    addStudent({
      id: Date.now().toString(),
      name,
      course,
      grade,
      enrollmentDate: new Date().toLocaleDateString(),
    });
    setName("");
    setCourse("");
    setGrade("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", flex: "1 1 150px" }}
      />
      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={{ padding: "8px", flex: "1 1 150px" }}
      />
      <input
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        style={{ padding: "8px", flex: "1 1 100px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Add Student
      </button>
      {error && <div style={{ color: "red", flexBasis: "100%" }}>{error}</div>}
    </form>
  );
}

export default AddStudentForm;
