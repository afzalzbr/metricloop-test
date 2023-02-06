import { React } from "react";
import { Modal } from "antd";
import CloseIcon from "../../../Assets/svgIcon/Closeicon";
import ActiveTabBottomLine from "../../../Assets/svgIcon/ActiveTabBottomLine";
import { Col, Row } from "antd";
import { Select, Input } from "antd";

function AddSegmentsModel(props) {
  function CloseModel() {
    props.onHide(false);
  }

  return (
    <div>
      <Modal
        open={props.show}
        closeIcon={<CloseIcon />}
        onCancel={CloseModel}
        width={1800}
        footer={null}
      >
        <div className="Segments">
          <div className="AddDialog">
            <div className="TopBar">
              <div
                className="d-flex align-center"
                style={{ position: "relative", marginLeft: "2%" }}
              >
                <div style={{ paddingLeft: "0.3%" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.575 6.44994C19.3314 6.69383 19.042 6.88719 18.7234 7.01892C18.4049 7.15065 18.0635 7.21815 17.7188 7.21754C17.5076 7.21755 17.2971 7.19225 17.0919 7.1422L14.9075 11.1989C14.9323 11.2219 14.9571 11.2448 14.9812 11.2689C15.3283 11.6161 15.5711 12.0536 15.682 12.5319C15.7929 13.0102 15.7675 13.51 15.6086 13.9745C15.4497 14.439 15.1637 14.8497 14.7831 15.1598C14.4025 15.47 13.9425 15.6672 13.4555 15.729C12.9684 15.7909 12.4738 15.7149 12.0278 15.5097C11.5817 15.3045 11.2022 14.9784 10.9322 14.5683C10.6623 14.1582 10.5127 13.6806 10.5006 13.1898C10.4885 12.699 10.6142 12.2146 10.8635 11.7917L9.20836 10.1365C8.61707 10.4832 7.91405 10.5861 7.2482 10.4234L5.06378 14.4801C5.08856 14.5031 5.11334 14.5261 5.13742 14.5501C5.50454 14.9172 5.75456 15.385 5.85586 15.8942C5.95716 16.4034 5.90519 16.9312 5.70652 17.4108C5.50785 17.8905 5.1714 18.3005 4.73972 18.5889C4.30804 18.8774 3.80052 19.0314 3.28134 19.0314C2.76216 19.0314 2.25463 18.8774 1.82294 18.589C1.39125 18.3006 1.05478 17.8906 0.856092 17.411C0.657399 16.9313 0.605403 16.4035 0.706679 15.8943C0.807955 15.3851 1.05795 14.9173 1.42506 14.5502L1.4251 14.5501C1.74455 14.231 2.14088 13.9997 2.57583 13.8784C3.01078 13.7571 3.46964 13.7501 3.90811 13.8579L6.09249 9.80128C6.06772 9.77829 6.04293 9.75534 6.01885 9.73127C5.52731 9.23859 5.25125 8.57106 5.25125 7.87512C5.25124 7.17917 5.52728 6.51164 6.01881 6.01895L6.01885 6.01887C6.47067 5.56711 7.07173 5.29564 7.70939 5.25533C8.34704 5.21502 8.9775 5.40864 9.48261 5.79991C9.98772 6.19117 10.3328 6.75322 10.4532 7.3807C10.5735 8.00819 10.4609 8.65803 10.1365 9.20844L11.7916 10.8636C12.3828 10.5166 13.086 10.4137 13.7519 10.5767L15.9362 6.52C15.9115 6.49705 15.8867 6.4741 15.8626 6.45003C15.3711 5.95736 15.095 5.28983 15.095 4.59388C15.095 3.89793 15.371 3.2304 15.8626 2.73771L15.8626 2.73763C16.355 2.24576 17.0225 1.96955 17.7185 1.96973C18.4145 1.9699 19.0819 2.24645 19.574 2.73857C20.0661 3.23068 20.3427 3.89809 20.3428 4.59405C20.343 5.29002 20.0668 5.95757 19.575 6.44995V6.44994Z"
                      fill="#4E46DC"
                    />
                  </svg>
                </div>
                <div className="heading1" style={{ marginLeft: "0.4%" }}>
                  Segments
                </div>
                <div className="activeTabData">
                  <ActiveTabBottomLine></ActiveTabBottomLine>
                </div>
              </div>
            </div>
            <div className="ContentBox">
              <Row gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}>
                <Col md={8}>
                  <div className="heading2" style={{ marginBottom: "1.8%" }}>
                    Database
                  </div>
                  <div className="selectCustomStyle">
                    <Select
                      showSearch
                      bordered={false}
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="heading2" style={{ marginBottom: "1.8%" }}>
                    Segment Name
                  </div>
                  <div className="selectCustomStyle">
                    <Input bordered={false} style={{ width: "100%" }} />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="heading2" style={{ marginBottom: "1.8%" }}>
                    Select User Form
                  </div>
                  <div className="selectCustomStyle">
                    <Select
                      showSearch
                      bordered={false}
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </div>
                </Col>
              </Row>

              {/* ------------------------------- Based on conditions of */}
              <div className="heading1" style={{ marginTop: "3%" }}>
                Based on conditions of
              </div>
              <Row
                gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
                style={{ marginTop: "1.6%" }}
              >
                <Col md={8}>
                  <div className="selectCustomStyle">
                    <Select
                      showSearch
                      bordered={false}
                      placeholder="Value of"
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="selectCustomStyle">
                    <Select
                      showSearch
                      bordered={false}
                      style={{ width: "100%" }}
                      placeholder="User"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <Row>
                    <Col flex="auto">
                      {" "}
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
                          }
                          options={[
                            {
                              value: "1",
                              label: "Not Identified",
                            },
                            {
                              value: "2",
                              label: "Closed",
                            },
                            {
                              value: "3",
                              label: "Communicated",
                            },
                            {
                              value: "4",
                              label: "Identified",
                            },
                            {
                              value: "5",
                              label: "Resolved",
                            },
                            {
                              value: "6",
                              label: "Cancelled",
                            },
                          ]}
                        />
                      </div>
                    </Col>
                    <Col flex="40px">
                      <div
                        className="OfSpan"
                        style={{ fontSize: "16px", maring: "0" }}
                      ></div>
                    </Col>
                    <Col flex="auto">
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
                          }
                          options={[
                            {
                              value: "1",
                              label: "Not Identified",
                            },
                            {
                              value: "2",
                              label: "Closed",
                            },
                            {
                              value: "3",
                              label: "Communicated",
                            },
                            {
                              value: "4",
                              label: "Identified",
                            },
                            {
                              value: "5",
                              label: "Resolved",
                            },
                            {
                              value: "6",
                              label: "Cancelled",
                            },
                          ]}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
                style={{ marginTop: "1.6%" }}
              >
                <Col md={8}>
                  <Row>
                    <Col flex="50%">
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }} placeholder="Add"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
                          }
                          options={[
                            {
                              value: "1",
                              label: "Not Identified",
                            },
                            {
                              value: "2",
                              label: "Closed",
                            },
                            {
                              value: "3",
                              label: "Communicated",
                            },
                            {
                              value: "4",
                              label: "Identified",
                            },
                            {
                              value: "5",
                              label: "Resolved",
                            },
                            {
                              value: "6",
                              label: "Cancelled",
                            },
                          ]}
                        />
                      </div>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>

              <div className="actionButton d-flex align-center justify-end">
                <button className="cancelBtn" onClick={CloseModel}>
                  Cancel
                </button>
                <button className="saveBtn" onClick={CloseModel}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddSegmentsModel;
