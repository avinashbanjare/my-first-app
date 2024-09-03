import React from "react";

const App1 = () => {
  return (
    <div
      style={{
        height: "650px",
        width: "1350px",
        backgroundColor: "lightgreen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "550px",
          width: "1200px",
          backgroundColor: "lightblue",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "60%",
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap:"40px",
            
          }}
        >
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "100px",
            }}
          >
            <span>professinol plan</span>
            <span>250</span>
          </div>
          <img
            style={{ height: "200px", width: "400px" }}
            src="https://images.creativemarket.com/0.1.0/ps/3111241/1647/1212/m1/fpnw/wm1/atm-card-01-.jpg?1502560417&s=4a7107e020657aedb6e8b4fb3b49ac0d
                "
            alt=""
          />
          <span style={{ fontSize: "20px" }}>jajsjsjsgafag</span>
          <span style={{ fontSize: "20px" }}>aviansh kumar</span>
        </div>
        <div
          style={{
            height: "100%",
            width: "40%",
            backgroundColor: "skyblue",
            display:"flex",
            flexDirection:"column",
            paddingLeft:"40px",
            paddingRight:"40px",
            gap:"20px"



          }}
        >
            <span style={{ fontSize:"20px",padding:"4px",}}>payment details </span>
            log <input type="text" name="" id="" />
           email <input type="email" name="" id="" />
           password <input type="password"name ="id" />
            <input type="date" name="" id="" />
            <input type="color" name="" id="" />


            <span style={{fontSize:"8px",borderInlineColor:"ActiveBorder"}}>pay here</span>
        </div>
      </div>
    </div>
  );
};

export default App1;
