import { actions as dataSourceActions } from '../Slices/dataSourceSlice';
import { store } from '../index';
import { createDataSourceService, deleteDataSourceService, getAllDataSourcesService, updateDataSourceService } from '../../Services/DataSourceService';

const dispatch = store.dispatch;


/********************************
 *         All Data Sources     *
 * ******************************/

// get all data sources
export const getAllDataSources = () => {
  dispatch(dataSourceActions.load());
  return getAllDataSourcesService()
    .then((res) => {
      dispatch(dataSourceActions.loadSuccess(res?.data));
    })
    .catch((err) => {
      console.error('getAllDataSources error: ', err);
      if (err?.name !== 'CanceledError') {
        dispatch(dataSourceActions.loadFail());
      }
    })
}

// create new data source from google sheet
export const createNewDataSource = (name, sheet_id) => {
  dispatch(dataSourceActions.createNew());
  return createDataSourceService(name, sheet_id)
    .then((res) => {
      dispatch(dataSourceActions.createNewSuccess());
      getAllDataSources();
    })
    .catch((err) => {
      dispatch(dataSourceActions.createNewFail());
      console.error('createNewDataSource error: ', err);
    })
}

// reset create new data source
export const resetCreateNewDataSource = () => {
  dispatch(dataSourceActions.resetCreateNew());
}

// update data source
export const updateDataSource = (id, name, sheet_id) => {
  dispatch(dataSourceActions.update());
  return updateDataSourceService(id, name, sheet_id)
    .then((res) => {
      dispatch(dataSourceActions.updateSuccess());
      getAllDataSources();
    })
    .catch((err) => {
      dispatch(dataSourceActions.updateFail());
      console.error('updateDataSource error: ', err);
    })
}

// reset update data source
export const resetUpdateDataSource = () => {
  dispatch(dataSourceActions.resetUpdate());
}

// delete data source
export const deleteDataSource = (id) => {
  dispatch(dataSourceActions.delete());
  return deleteDataSourceService(id)
    .then((res) => {
      dispatch(dataSourceActions.deleteSuccess());
      getAllDataSources();
    })
    .catch((err) => {
      dispatch(dataSourceActions.deleteFail());
      console.error('deleteDataSource error: ', err);
    })
}

// reset delete data source
export const resetDeleteDataSource = () => {
  dispatch(dataSourceActions.resetDelete());
}