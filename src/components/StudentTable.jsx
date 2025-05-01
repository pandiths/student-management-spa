import React, { useState } from "react";

function StudentTable({ students }) {
  const [search, setSearch] = useState("");

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.includes(search)
  );

  return (
    <div>
      <input
        placeholder="Search by name or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "12px",
          padding: "8px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "14px",
        }}
      />
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Grade</th>
            <th style={thStyle}>Enrollment Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((s) => (
              <tr key={s.id}>
                <td style={tdStyle}>{s.id}</td>
                <td style={tdStyle}>{s.name}</td>
                <td style={tdStyle}>{s.course}</td>
                <td style={tdStyle}>{s.grade}</td>
                <td style={tdStyle}>{s.enrollmentDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={emptyStateStyle}>
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "2px solid #ddd",
  fontSize: "15px",
  color: "#333",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
  fontSize: "14px",
  color: "#444",
};

const emptyStateStyle = {
  textAlign: "center",
  padding: "12px",
  color: "#777",
  fontStyle: "italic",
  backgroundColor: "#fcfcfc",
};

export default StudentTable;
