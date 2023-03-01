import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNewBoard from "../../Component/Board/AddNewBoard";

function HomePage() {
  const [AddBoard, setAddBoard] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <div className="homeContainer">
        <div className="heading1">Create Your Board!</div>
        <button
          className="btn-primary createBtn"
          style={{ marginTop: "2%" }}
          onClick={() => {
            setAddBoard(true);
          }}
        >
          Create Board
        </button>
      </div>
      {/* ---------------- Create New Board */}
      <AddNewBoard
        show={AddBoard}
        // onSuccess={() => {
        //   navigate("/board");
        // }}
        onHide={() => {
          setAddBoard(false);
        }}
      ></AddNewBoard>
    </div>
  );
}

export default HomePage;
