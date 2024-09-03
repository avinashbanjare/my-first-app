import React from "react";

const App3 = () => {
  const students = [
    {
      name: "raj",
      maths: 90,
      science: 80,
      english: 90,
      passed: true,
      address: "bilha",
    },
    {
      name: "ram",
      maths: 90,
      science: 80,
      english: 90,
      passed: true,
      address: "bilha",
    },
    {
      name: "shayam",
      maths: 90,
      science: 30,
      english: 40,
      passed: false,
      address: "bilha",
    },
    {
      name: "sandeep",
      maths: 40,
      science: 30,
      english: 50,
      passed: false,
      address: "bilha",
    },
  ];

  const koibolean = true;

  // conditionsal operator
  // koibolean ? "true wala chiz" : "false wal CHUIZ";

  return (
    <div
      style={{
        height: "1000px",
        width: "1200px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: "48px",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: "20%",
          padding: "12px",
          border: "2px solid rgba(128, 128, 128, 0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <span>Name: </span>
          <span>{students[0].name}</span>
        </div>
        <span>Maths score: {students[0].maths}</span>
        <span>Science score: {students[0].science}</span>
        <span>English score: {students[0].english}</span>
        <span>Result: {students[0].passed ? "Pass" : "Fail"}</span>
        <span>Address: {students[0].address}</span>
      </div>
      <div
        style={{
          width: "20%",
          padding: "12px",
          border: "2px solid rgba(128, 128, 128, 0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <span>Name: </span>
          <span>{students[1].name}</span>
        </div>
        <span>Maths score: {students[1].maths}</span>
        <span>Science score: {students[1].science}</span>
        <span>English score: {students[1].english}</span>
        <span>Result: {students[1].passed ? "Pass" : "Fail"}</span>
        <span>Address: {students[1].address}</span>
      </div>
      <div
        style={{
          width: "20%",
          padding: "12px",
          border: "2px solid rgba(128, 128, 128, 0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <span>Name: </span>
          <span>{students[2].name}</span>
        </div>
        <span>Maths score: {students[2].maths}</span>
        <span>Science score: {students[2].science}</span>
        <span>English score: {students[2].english}</span>
        <span>Result: {students[2].passed ? "Pass" : "Fail"}</span>
        <span>Address: {students[2].address}</span>
      </div>
      <div
        style={{
          width: "20%",
          padding: "12px",
          border: "2px solid rgba(128, 128, 128, 0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <span>Name: </span>
          <span>{students[3].name}</span>
        </div>
        <span>Maths score: {students[3].maths}</span>
        <span>Science score: {students[3].science}</span>
        <span>English score: {students[3].english}</span>
        <span>Result: {students[3].passed ? "Pass" : "Fail"}</span>
        <span>Address: {students[3].address}</span>
      </div>
    </div>
  );
};

export default App3;
