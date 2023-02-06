import { Checkbox, Pagination, Input } from "antd";
import { Button } from "antd";
import DeleteIcon from "../../../Assets/svgIcon/Deleteicon";
import PencilIcon from "../../../Assets/svgIcon/pencilicon";
import React, { useState } from "react";
import DeleteDialog from "../../../Component/DeleteDialog/DeleteDialog";
import AddSegmentsModel from "../../../Component/Segments/AddSegments/AddSegments";
import EditSegmentsModel from "../../../Component/Segments/EditSegments/EditSegments";

function SegmentsPage() {
  const [openAddModel, setAddModelOpen] = useState(false);
  const [openEditModel, setEditModelOpen] = useState(false);
  const [opendeleteDialog, SetDeleteDialog] = useState(false);

  return <div> Segments </div>;
  // <div className="Segments">
  //   <div className="d-flex justify-space-between">
  //     <div className="heading1">Segments</div>
  //     <button
  //       className="btn-primary"
  //       onClick={() => {
  //         setAddModelOpen(true);
  //       }}
  //     >
  //       Create Segment
  //     </button>
  //   </div>
  //   <div style={{ marginTop: "2%", maxWidth: "30%" }}>
  //     <div
  //       className="table-data d-flex"
  //       style={{ fontSize: "1.6rem", marginBottom: "2%", color: "#4E46DC" }}
  //     >
  //       <b> Search </b>
  //     </div>
  //     <Input placeholder="Search" />
  //   </div>
  //   {/* ------------------ Data table ----------------- */}
  //   <table
  //     className="w-100"
  //     style={{
  //       borderCollapse: "collapse",
  //       marginTop: "2%",
  //       marginBottom: "3%",
  //     }}
  //   >
  //     <tr style={{ background: "#4E46DC" }}>
  //       <td style={{ width: "5%", paddingTop: "3%" }}></td>
  //       <td style={{ width: "16%" }}>
  //         <div className="table-heading"> Name </div>
  //       </td>
  //       <td style={{ width: "16%" }}>
  //         <div className="table-heading">Data points </div>
  //       </td>
  //       <td style={{ width: "16%" }}>
  //         <div className="table-heading">Created date </div>
  //       </td>
  //       <td style={{ width: "16%" }}>
  //         <div className="table-heading">Date Modified </div>
  //       </td>
  //       <td style={{ width: "27%" }}>
  //         <div className="table-heading">Actions </div>
  //       </td>
  //     </tr>
  //     <tbody>
  //       <tr style={{ border: "1px solid #F0F0F0" }}>
  //         <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
  //           <Checkbox value="A"></Checkbox>
  //         </td>
  //         <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
  //           <div className="table-data"> Age Data </div>{" "}
  //         </td>
  //         <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
  //           <div className="table-data"> 2 Data Points </div>{" "}
  //         </td>
  //         <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
  //           <div className="table-data"> 12/5/2022 </div>{" "}
  //         </td>
  //         <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
  //           <div className="table-data"> 12/6/2022 </div>{" "}
  //         </td>
  //         <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
  //           <div>
  //             <Button
  //               type="text"
  //               onClick={() => {
  //                 setEditModelOpen(true);
  //               }}
  //             >
  //               <PencilIcon></PencilIcon>
  //             </Button>
  //             <Button type="text" onClick={() => SetDeleteDialog(true)}>
  //               <DeleteIcon></DeleteIcon>
  //             </Button>
  //           </div>
  //         </td>
  //       </tr>
  //     </tbody>
  //   </table>
  //   {/* ------------------ Pagination ----------------- */}
  //   <div className="d-flex justify-end">
  //     <Pagination
  //       total={85}
  //       showTotal={(total, range) =>
  //         `${range[0]}-${range[1]} of ${total} items`
  //       }
  //       defaultPageSize={20}
  //       defaultCurrent={1}
  //     />
  //   </div>
  //   {/* ------------------ Add Model ----------------- */}
  //   <AddSegmentsModel
  //     show={openAddModel}
  //     onHide={() => {
  //       setAddModelOpen(false);
  //     }}
  //   ></AddSegmentsModel>
  //   {/* ------------------ Edit Model ----------------- */}
  //   <EditSegmentsModel
  //     show={openEditModel}
  //     onHide={() => {
  //       setEditModelOpen(false);
  //     }}
  //   ></EditSegmentsModel>
  //   {/* ------------------ Delete Model ----------------- */}
  //   <DeleteDialog
  //     show={opendeleteDialog}
  //     onHide={() => {
  //       SetDeleteDialog(false);
  //     }}
  //   ></DeleteDialog>
  // </div>
}

export default SegmentsPage;
