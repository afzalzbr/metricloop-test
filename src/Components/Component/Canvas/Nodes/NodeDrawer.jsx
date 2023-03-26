import React, { useEffect, useState } from "react";
import { Button, Drawer, theme, Input, Select, Avatar } from "antd";
import BlackCloseIcon from "../../../Assets/svgIcon/BlackCloseIcon";
import ColorPickerComponet from "../../../Component/ColorPicker/ColorPicker.component";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const { TextArea } = Input;

const NodeDrawer = ({}) => {
  const [open, setOpen] = useState(false);
  const selectedNode = useSelector((state) => state.editor.selectedNode);
  const [projectName, setProjectName] = useState(true);
  const [projectNameValue, setProjectNameValue] = useState("Project 1");

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (selectedNode.id > -1) {
      setOpen(true);
    }
    // else {
    //   setOpen(false);
    // }
  }, [selectedNode]);

  return (
    <>
      <Drawer
        width={430}
        className="ActionSideBar"
        getContainer={false}
        open={open}
        closable={false}
      >
        <div className="d-flex justify-end">
          <Button onClick={onClose} className="iconButton">
            <BlackCloseIcon></BlackCloseIcon>
          </Button>
        </div>
        <div className="ContentSidebar">
          <div className="d-flex">
            {projectName ? (
              <div>
                <div className="heading1">{projectNameValue}</div>
              </div>
            ) : (
              <div>
                <Input
                  style={{ marginLeft: "2rem", width: "80%" }}
                  placeholder="Project 1"
                  defaultValue={projectNameValue}
                  onChange={(e) => setProjectNameValue(e.target.value)}
                />
              </div>
            )}

            <div style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
              <button
                className="iconButton"
                onClick={async () => {
                  setProjectName(() => !projectName);
                }}
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4715 18.5427H1.12372C0.851916 18.5427 0.591243 18.6509 0.399047 18.8435C0.206852 19.0361 0.098877 19.2974 0.098877 19.5697C0.098877 19.8421 0.206852 20.1034 0.399047 20.296C0.591243 20.4886 0.851916 20.5968 1.12372 20.5968H15.4715C15.7434 20.5968 16.004 20.4886 16.1962 20.296C16.3884 20.1034 16.4964 19.8421 16.4964 19.5697C16.4964 19.2974 16.3884 19.0361 16.1962 18.8435C16.004 18.6509 15.7434 18.5427 15.4715 18.5427Z"
                    fill="#575757"
                  />
                  <path
                    d="M1.12412 16.4887H1.21636L5.48996 16.0984C5.95811 16.0517 6.39596 15.845 6.73002 15.513L15.9536 6.26986C16.3116 5.89086 16.5051 5.3851 16.4916 4.8634C16.4782 4.3417 16.2589 3.84662 15.8819 3.48664L13.0738 0.672614C12.7073 0.327634 12.2271 0.12969 11.7244 0.116434C11.2218 0.103179 10.7318 0.275537 10.3477 0.600723L1.12412 9.84389C0.792858 10.1787 0.586596 10.6174 0.539961 11.0866L0.0992781 15.3692C0.0854724 15.5197 0.10495 15.6713 0.156322 15.8133C0.207694 15.9553 0.289696 16.0842 0.396483 16.1909C0.492245 16.286 0.605814 16.3614 0.730678 16.4125C0.855543 16.4636 0.989246 16.4895 1.12412 16.4887ZM11.6493 2.11044L14.4471 4.9142L12.3974 6.91689L9.65083 4.16448L11.6493 2.11044ZM2.52816 11.2612L8.29804 5.52014L11.0651 8.29309L5.32599 14.0444L2.25145 14.332L2.52816 11.2612Z"
                    fill="#575757"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div className="heading2">Add Metric</div>
            <Select
              className="CustomSelectStyle"
              defaultValue="lucy"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </div>
          <div style={{ marginTop: "1rem" }} className="d-flex ">
            <div style={{ width: "75%" }}>
              <div className="heading2">Shape</div>
              <Select
                className="CustomSelectStyle"
                defaultValue="lucy"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div style={{ width: "25%", paddingLeft: "1rem" }}>
              <div className="heading2">Color</div>
              <div style={{ marginTop: "1rem" }}>
                <ColorPickerComponet></ColorPickerComponet>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div className="d-flex align-center">
              <div className="heading2">Add Image</div>
              <button className="iconButton" style={{ marginLeft: "0.5rem" }}>
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 3.95574V6.5929H21.0526V10.5486H18.4211V6.5929H14.4737V3.95574H18.4211V0H21.0526V3.95574H25ZM13.8158 13.1858C14.9053 13.1858 15.7895 12.2997 15.7895 11.2079C15.7895 10.1161 14.9053 9.23006 13.8158 9.23006C12.7263 9.23006 11.8421 10.1161 11.8421 11.2079C11.8421 12.2997 12.7263 13.1858 13.8158 13.1858ZM18.4211 17.4501L17.7461 16.6985C16.7013 15.5316 14.8776 15.5316 13.8303 16.6985L12.9684 17.6611L6.57895 10.5486L2.63158 14.9435V6.5929H11.8421V3.95574H2.63158C1.17763 3.95574 0 5.13587 0 6.5929V22.4159C0 23.8729 1.17763 25.053 2.63158 25.053H18.4211C19.875 25.053 21.0526 23.8729 21.0526 22.4159V13.1858H18.4211V17.4501Z"
                    fill="#575757"
                  />
                </svg>
              </button>
            </div>
            <div style={{ marginTop: "0.8rem" }}>
              <Avatar
                size="large"
                style={{ marginRight: "0.9rem" }}
                icon={<UserOutlined />}
              />
              <Avatar
                size="large"
                style={{ marginRight: "0.9rem" }}
                icon={<UserOutlined />}
              />
              <Avatar
                size="large"
                style={{ marginRight: "0.9rem" }}
                icon={<UserOutlined />}
              />
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div className="heading2" style={{ marginBottom: "0.9rem" }}>
              Add plain text description, links, etc
            </div>
            <TextArea style={{ backgroundColor: "#EBEBEB" }} rows={4} />
          </div>
          <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            <div className="heading2" style={{ marginBottom: "0.9rem" }}>
              Comments
            </div>
            <div className="CommentSection">
              <div style={{ width: "20%" }}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </div>
              <div style={{ width: "80%" }} className="text">
                Lorem ipsum dolore magna
              </div>
            </div>
            <div className="CommentSection">
              <div style={{ width: "20%" }}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </div>
              <div style={{ width: "80%" }} className="text">
                <TextArea
                  style={{ backgroundColor: "#EBEBEB", border: "none" }}
                  defaultValue="Add Comment"
                  className="text"
                  rows={4}
                />
              </div>
            </div>
            <div className="d-flex justify-end">
              <button className="SaveCommentButton btn-primary">Save </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NodeDrawer;
