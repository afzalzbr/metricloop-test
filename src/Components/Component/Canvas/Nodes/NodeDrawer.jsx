import React, { useEffect, useState } from 'react';
import { Button, Drawer, theme, Input, Select, Avatar } from 'antd';
import BlackCloseIcon from '../../../Assets/svgIcon/BlackCloseIcon';
import ColorPickerComponent from '../../../Component/ColorPicker/ColorPicker.component';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import EditIcon from '../../../Assets/svgIcon/EditorSvgIcon/EditIcon';
import { updateNodeInBoard } from '../../../../store/Actions/editorActions';

const { TextArea } = Input;

const NodeDrawer = ({}) => {
  const [open, setOpen] = useState(false);
  const selectedNode = useSelector((state) => state.editor.selectedNode);
  const nodeLabel = selectedNode?.node_data?.label;
  const nodeDb = selectedNode?.nodeDB;
  console.log('NodeDrawer nodeLabel: ', nodeLabel);
  const [editNodeName, setEditNodeName] = useState(false);
  const [nodeNameValue, setNodeNameValue] = useState(nodeLabel);

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('useEffect[selectedNode] NodeDrawer: ', selectedNode);
    if (selectedNode.id > -1 && !open) {
      setOpen(true);
      setNodeNameValue(() => nodeLabel);
    }
  }, [selectedNode]);

  const onCloseEditName = () => {
    setEditNodeName(() => false);
    setNodeNameValue(() => nodeLabel);
  };

  const submitEditName = () => {
    setEditNodeName(() => false);
    // let nodeId = nodeDb.id;
    console.log('submitEditName: ', nodeDb);
    let nodeData = JSON.stringify({
      ...nodeDb.node_data,
      label: nodeNameValue,
      data: { ...nodeDb.node_data.data, label: nodeNameValue },
    });
    let nodeDB = { ...nodeDb, node_data: nodeData, node_name: nodeNameValue };
    updateNodeInBoard({ ...nodeDB });
  };

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
          <Button onClick={onClose} shape="circle" type="secondary">
            <BlackCloseIcon />
          </Button>
        </div>
        <div className="ContentSidebar">
          <div className="d-flex" style={{ height: '32px' }}>
            {!editNodeName ? (
              <div className="d-flex align-center">
                <div className="heading1">{nodeNameValue}</div>
                <Button
                  type="secondary"
                  shape="circle"
                  icon={
                    <EditIcon style={{ fontSize: '16px', color: '#00ff00' }} />
                  }
                  style={{ marginLeft: '10px' }}
                  onClick={() => setEditNodeName(true)}
                />
              </div>
            ) : (
              <div className="d-flex" style={{ width: '80%' }}>
                <Input
                  style={{ width: '80%' }}
                  placeholder="Node label"
                  defaultValue={nodeNameValue}
                  onChange={(e) => setNodeNameValue(e.target.value)}
                />
                <Button
                  type="secondary"
                  shape="circle"
                  icon={
                    <CheckOutlined
                      style={{ fontSize: '16px', color: '#00ff00' }}
                    />
                  }
                  style={{ marginLeft: '5px' }}
                  onClick={submitEditName}
                />
                <Button
                  type="secondary"
                  shape="circle"
                  icon={
                    <CloseOutlined
                      style={{ fontSize: '16px', color: '#ff0000' }}
                    />
                  }
                  style={{ marginLeft: '5px' }}
                  onClick={onCloseEditName}
                />
              </div>
            )}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div className="heading2">Add Metric</div>
            <Select
              className="CustomSelectStyle"
              // defaultValue="lucy"
              placeholder="Select Metric"
              options={
                [
                  // { value: 'jack', label: 'Jack' },
                  // { value: 'lucy', label: 'Lucy' },
                  // { value: 'Yiminghe', label: 'yiminghe' },
                ]
              }
            />
          </div>
          <div style={{ marginTop: '1rem' }} className="d-flex ">
            <div style={{ width: '75%' }}>
              <div className="heading2">Shape</div>
              <Select
                className="CustomSelectStyle"
                // defaultValue="lucy"
                placeholder="Select Shape"
                options={
                  [
                    // { value: 'jack', label: 'Jack' },
                    // { value: 'lucy', label: 'Lucy' },
                    // { value: 'Yiminghe', label: 'yiminghe' },
                  ]
                }
              />
            </div>
            <div style={{ width: '25%', paddingLeft: '1rem' }}>
              <div className="heading2">Color</div>
              <div style={{ marginTop: '1rem' }}>
                <ColorPickerComponent position="right" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <div className="d-flex align-center">
              <div className="heading2">Add Image</div>
              <button className="iconButton" style={{ marginLeft: '0.5rem' }}>
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
            <div style={{ marginTop: '0.8rem' }}>
              <Avatar
                size="large"
                style={{ marginRight: '0.9rem' }}
                icon={<UserOutlined />}
              />
              <Avatar
                size="large"
                style={{ marginRight: '0.9rem' }}
                icon={<UserOutlined />}
              />
              <Avatar
                size="large"
                style={{ marginRight: '0.9rem' }}
                icon={<UserOutlined />}
              />
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div className="heading2" style={{ marginBottom: '0.9rem' }}>
              Add plain text description, links, etc
            </div>
            <TextArea style={{ backgroundColor: '#EBEBEB' }} rows={4} />
          </div>
          <div
            style={{ marginTop: '2rem', marginBottom: '3rem', display: 'none' }}
          >
            <div className="heading2" style={{ marginBottom: '0.9rem' }}>
              Comments
            </div>
            <div className="CommentSection">
              <div style={{ width: '20%' }}>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
              </div>
              <div style={{ width: '80%' }} className="text">
                Lorem ipsum dolore magna
              </div>
            </div>
            <div className="CommentSection">
              <div style={{ width: '20%' }}>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
              </div>
              <div style={{ width: '80%' }} className="text">
                <TextArea
                  style={{ backgroundColor: '#EBEBEB', border: 'none' }}
                  defaultValue="Add Comment"
                  className="text"
                  rows={4}
                />
              </div>
            </div>
            <div className="d-flex justify-end">
              <button className="SaveCommentButton btn-primary">Save</button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NodeDrawer;
