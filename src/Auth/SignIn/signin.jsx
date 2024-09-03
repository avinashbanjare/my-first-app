import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState(""); // hooks ffrom react
  const [password, setPassword] = useState(""); 
  const [isSubmitted, setIsSubmitted] = useState(false);  
  const [date,setdate] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "650px",
        width: "1350px",
        backgroundColor:"lightcoral",
      }}
    >
      <div>
        <span>Email</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
      style={{
        backgroundColor:"blue"
      }}
      ></div>
      <span>date</span>
      <input
      type="date"
      value={date}
      onChange={(e) => setdate(e.target.value)}
      ></input>
      <button onClick={() => setIsSubmitted(true)}>Submit</button>
      {isSubmitted ? (
        <div>
          <span>Your Email is: {email}</span>
          <span>Your Password is: {password}</span>
          <span>your date is: {date}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Signin;

// conditional

// agarYeTrueHai ? truewalaexecute : binaTurewals
