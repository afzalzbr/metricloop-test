import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function AcceptAuthCode() {
  console.log(window.location.href);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    if (code) {
      window.location ='http://44.238.178.232/google-auth' + window.location.search;
    }
  }, []);

  return (
    <div>
      <h1>GoogleAuthPage - redirecting</h1>
      <div />
      <div />
      <div />
      {window.location.href}
      <div />
      <div />
      <div />
      {/* <div
        style={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to={"/board"}>Go to Boards</Link>
      </div> */}
    </div>
  );
}

export default AcceptAuthCode;
