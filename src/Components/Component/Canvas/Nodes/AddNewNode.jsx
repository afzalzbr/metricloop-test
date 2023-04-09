import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { resetAddNode } from '../../../../store/Actions/editorActions';
import useSweetAlert from '../../../../hooks/useSweetAlert';

const AddNewNode = (props) => {
  const addNodeSuccess = useSelector((state) => state.editor.addNode.success);
  const addNodeFail = useSelector((state) => state.editor.addNode.fail);

  // sweet alert hook
  const showAlert = useSweetAlert();

  useEffect(() => {
    if (addNodeSuccess || addNodeFail) {
      if (addNodeSuccess) {
        showAlert('success', { title: 'Node created successfully' })
      } else if (addNodeFail) {
        showAlert('error', { title: 'Board not created' })
      }
      setTimeout(() => {
        resetAddNode();
      }, 1500);
    }
  }, [addNodeSuccess, addNodeFail]);

  return <></>;
};

export default AddNewNode;
