import React from "react";

const Terminal = (text) => {
  return (
    <span
      style={{
        display: "flex",
        padding: "8px",
        border: "2px solid gray",
      }}
    >
      {text}
    </span>
  );
};

export default Terminal;
