import { React, useState } from "react";
import AddNewBoard from "../../Component/Board/AddNewBoard";

function HomePage() {
  const [AddBoard, setAddBoard] = useState(false);

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
        onHide={() => {
          setAddBoard(false);
        }}
      ></AddNewBoard>
    </div>
  );
}

export default HomePage;
