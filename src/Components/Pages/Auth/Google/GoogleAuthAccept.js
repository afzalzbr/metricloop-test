import React from "react";
import { Link } from "react-router-dom";

function AcceptAuthCode() {
  console.log(window.location.href);
  return (
    <div>
      <h1>GoogleAuthPage</h1>
      <div />
      <div />
      <div />
      {window.location.href}
      <div />
      <div />
      <div />
      <div
        style={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to={"/board"}>Go to Boards</Link>
      </div>
    </div>
  );
}

export default AcceptAuthCode;
