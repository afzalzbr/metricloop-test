import { React } from "react";
import { Modal, Row, Col, Input, Select, Avatar } from "antd";
import LinkSendIcon from "../../../Assets/svgIcon/EditorSvgIcon/LinkSendIcon";
import SmallCloseIcon from "../../../Assets/svgIcon/SmallCloseIcon";

function ShareModel(props) {
  function CloseModel() {
    props.onHide(false);
  }

  return (
    <div >
      <Modal
        open={props.show}
        closeIcon={<SmallCloseIcon />}
        onCancel={CloseModel}
        className="EditorLayoutStyle"
        footer={null}
        style={{ paddingLeft: "0px" }}
        width={570}
        centered
      >
        <div className="EditorLayoutStyle">
          <div className="ShareDialog">
            <div className="TopBar">
              <div
                className="heading1"
                style={{
                  marginLeft: "0.4%",
                  fontFamily: "Segoe UI",
                  fontSize: "20px",
                  fontWeight : "600"
                }}
              >
                lnvite
              </div>
              <svg
                style={{ marginLeft: "-1.5rem" }}
                width="570"
                height="2"
                viewBox="0 0 570 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1C476.389 1 578.166 1 569.506 1"
                  stroke="#4E46DC"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="ContentBox">
              <Row style={{ marginTop: "1rem", marginBottom: "3rem" }}>
                <Col flex="auto" className="d-flex align-center">
                  <Input
                    placeholder="Email"
                    bordered={false}
                    style={{
                      background: "#EBEBEB",
                      borderRadius: "0",
                      padding: "5px 11px",
                      borderTopLeftRadius: "6px",
                      borderBottomLeftRadius: "6px",
                      fontSize: "20px",
                    }}
                  />
                  <Select
                    defaultValue="Can Edit"
                    bordered={false}
                    style={{
                      width: 160,
                      marginRight: "4%",
                      background: "#EBEBEB",
                      borderTopRightRadius: "6px",
                      borderBottomRightRadius: "6px",
                      padding: "5px 11px",
                    }}
                    options={[
                      { value: "jack", label: "Can View" },
                      { value: "Can Edit", label: "Can Edit" },
                    ]}
                  />
                </Col>
                <Col flex="130px">
                  <button className="shareButton">Share</button>
                </Col>
              </Row>
              <Row style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                <Col flex="auto" className="d-flex align-center">
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    J
                  </Avatar>
                  <div className="AvatarFirstName"> Jams</div>
                </Col>
                <Col flex="150px">
                  <Select
                    defaultValue="Can Edit"
                    bordered={false}
                    style={{
                      width: 150,
                      marginRight: "4%",
                      padding: "5px 11px",
                    }}
                    options={[
                      { value: "jack", label: "Can View" },
                      { value: "Can Edit", label: "Can Edit" },
                    ]}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                <Col flex="auto" className="d-flex align-center">
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    A
                  </Avatar>
                  <div className="AvatarFirstName"> Alan</div>
                </Col>
                <Col flex="150px">
                  <Select
                    defaultValue="Can Edit"
                    bordered={false}
                    style={{
                      width: 150,
                      marginRight: "4%",
                      padding: "5px 11px",
                    }}
                    options={[
                      { value: "jack", label: "Can View" },
                      { value: "Can Edit", label: "Can Edit" },
                    ]}
                  />
                </Col>
              </Row>
              <svg
                style={{ marginLeft: "-1.5rem" }}
                width="570"
                height="2"
                viewBox="0 0 570 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1C476.389 1 578.166 1 569.506 1"
                  stroke="#E4E4E4"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
              <button className="shareLinkbutton">
                <LinkSendIcon></LinkSendIcon>

                <div className="text">Copy link</div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ShareModel;
