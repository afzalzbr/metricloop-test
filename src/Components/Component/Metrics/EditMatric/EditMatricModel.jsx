import { React } from "react";
import ActiveTabBottomLine from "../../../Assets/svgIcon/ActiveTabBottomLine";

import SignalIcon from "../../../Assets/svgIcon/Signalicon";
import { Col, Row } from "antd";
import { Select, Input } from "antd";

function EditMatricModel(props) {
  function CloseModel() {
    props.onHide(false);
  }

  return (
    <div>
      <div className="MatricsPage">
        <div className="AddDialog">
          <div className="TopBar">
            <div
              className="d-flex align-center"
              style={{ position: "relative", marginLeft: "2%" }}
            >
              <div style={{ paddingLeft: "0.2%" }}>
                <SignalIcon></SignalIcon>
              </div>
              <div className="heading1" style={{ marginLeft: "0.4%" }}>
                Edit Metric
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
                  Metric Type
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
                  Metric Name
                </div>
                <div className="selectCustomStyle">
                  <Input bordered={false} style={{ width: "100%" }} />
                </div>
              </Col>
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
            </Row>
            <Row
              gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
              style={{ marginTop: "2%" }}
            >
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
                  <Col flex="40px">
                    <div className="OfSpan">of</div>
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
            <Row
              gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
              style={{ marginTop: "1.6%" }}
            >
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
                  <Col flex="60px">
                    <div
                      className="OfSpan"
                      style={{ fontSize: "16px", maring: "0" }}
                    >
                      And
                    </div>
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
              </Col>
              <Col md={8}>
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
            <Row
              gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
              style={{ marginTop: "1.6%" }}
            >
              <Col md={8}>
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

            <div className="actionButton d-flex align-center justify-end">
              <button className="cancel-btn" onClick={CloseModel}>
                Cancel
              </button>
              <button className="saveBtn" onClick={CloseModel}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMatricModel;
