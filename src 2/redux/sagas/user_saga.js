import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { types } from '../actions/type';
import {
  userlogin,
  changeUserPassword,
  categoryDetailFunction,
  addcategoryFunction,
  deleteCategoryFunction,
  updateCategoryData,
  employeeDetailsList,
  employeeRegisterFunction,
  singleEmployeeFunction,
  updateEmpData,
  employeeListStatus,
  categoryListStatus,
  getCategoryStockList,
  getProductListData
} from '../apis/apiservice';

function* loginUser({ payload }) {
  try {
    const user = yield call(userlogin, payload);
    if (user.data.success) {
      yield put({ type: types.SEND_REQUEST_LOGIN_SUCCESS, payload: user });
    }
    else {
      yield put({ type: types.SEND_REQUEST_LOGIN_FAILURE, payload: user });
    }

  } catch (error) {
    yield put({ type: types.SEND_REQUEST_LOGIN_FAILURE, payload: error });
    console.log('err--->>>>>>>', error);
  }
}

function* LogoutUser() {
  try {
    yield put({ type: types.SEND_REQUEST_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: types.SEND_REQUEST_LOGOUT_FAILURE, payload: err });
  }
}

function* userChangePassword({ payload }) {
  console.log('payload======', payload);
  try {
    const data = yield call(changeUserPassword, payload);
    // console.log('ch data :::::::::::::::::', data);
    console.log('data.success', data.success);
    if (data.success) {
      yield put({
        type: types.SEND_REQUEST_CHANGE_PASSWORD_SUCCESS,
        payload: data,
      });
    }
    else {
      yield put({
        type: types.SEND_REQUEST_CHANGE_PASSWORD_FAILURE,
        payload: data,
      });
    }
  } catch (error) {
    yield put({
      type: types.SEND_REQUEST_CHANGE_PASSWORD_FAILURE,
      payload: error,
    });
    console.log('err->>>>-?????', error);
  }
}

function* detailCategory() {
  try {
    const catlist = yield call(categoryDetailFunction);
    //console.log('cat ~~~~~~~~~~~~~~~~~~~~~~~~~', catlist);
    yield put({ type: types.GET_REQUEST_CATEGORY_SUCCESS, payload: catlist });
  } catch (error) {
    console.log('er----------------------------', error);
    yield put({ type: types.GET_REQUEST_CATEGORY_FAILURE, payload: error });
  }
}

function* addCategorylist({ payload }) {
  try {
    const addData = yield call(addcategoryFunction, payload);
    console.log('addCategorylist :::::::::::::::', addData);
    // console.log('addData.data.success', addData.data.success);
    // if (addData.success) {
    yield put({
      type: types.SEND_REQUEST_ADD_CATEGORY_SUCCESS,
      payload: addData,
    });
    // } else {
    //   yield put({ type: types.SEND_REQUEST_ADD_CATEGORY_FAILURE, payload: addData });
    // }
  } catch (error) {
    yield put({ type: types.SEND_REQUEST_ADD_CATEGORY_FAILURE, payload: error });
    console.log('erro :::>>', error);
  }
}

function* deleteCategory({ payload }) {
  try {
    const d_list = yield call(deleteCategoryFunction, payload);
    console.log('saga category delete', d_list);
    yield put({
      type: types.SEND_REQUEST_DELETE_CATEGORY_SUCCESS,
      payload: d_list,
    });
  } catch (error) {
    yield put({
      type: types.SEND_REQUEST_DELETE_CATEGORY_FAILURE,
      payload: error,
    });
    console.log('del error', error);
  }
}

function* updateCategory({ payload }) {
  try {
    const updatData = yield call(updateCategoryData, payload);
    console.log('updatData +++ ::::', updatData);
    yield put({
      type: types.SEND_REQUEST_UPDATE_CATEGORY_SUCCESS,
      payload: updatData,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_UPDATE_CATEGORY_FAILURE,
      payload: err,
    });
    console.log('update ====', err);
  }
}

function* employeeDetails() {
  try {
    const empdata = yield call(employeeDetailsList);
    //console.log('emp ~~~~~~', empdata);
    yield put({ type: types.GET_EMPLOYEE_DATA_SUCCESS, payload: empdata });
  } catch (error) {
    console.log('errrr', error);
    yield put({ type: types.GET_EMPLOYEE_DATA_FAILURE, payload: error });
  }
}

function* empRegister({ payload }) {
  try {
    const emp_data = yield call(employeeRegisterFunction, payload);
    console.log('employeeRegisterFunction :::::::::::::::', emp_data);
    if (emp_data.data.success)
      yield put({
        type: types.SEND_REQUEST_EMP_REG_DATA_SUCCESS,
        payload: emp_data,
      });

    else
      yield put({ type: types.SEND_REQUEST_EMP_REG_DATA_FAILURE, payload: emp_data });

  } catch (error) {
    yield put({ type: types.SEND_REQUEST_EMP_REG_DATA_FAILURE, payload: error });
    console.log('erro :::>>', error);
  }
}


function* singleEmpData({ payload }) {
  try {
    const single_data = yield call(singleEmployeeFunction, payload);
    yield put({
      type: types.GET_SINGLE_EMPLOYEE_DATA_SUCCESS,
      payload: single_data,
    });
  } catch (error) {
    yield put({ type: types.GET_SINGLE_EMPLOYEE_DATA_FAILURE, payload: error });
    console.log('erro :::>>', error);
  }
}

function* updateEmployee({ payload }) {
  try {
    const update_emp = yield call(updateEmpData, payload);
    console.log('emp update', update_emp);
    yield put({
      type: types.SEND_REQUEST_UPDATE_EMPLOYEE_SUCCESS,
      payload: update_emp,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_UPDATE_EMPLOYEE_FAILURE,
      payload: err,
    });
    console.log('emp update ====', err);
  }
}

function* employeeStatus({ payload }) {
  try {
    const emp_status = yield call(employeeListStatus, payload);
    yield put({
      type: types.SEND_REQUEST_EMPLOYEE_STATUS_SUCCESS,
      payload: emp_status,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_EMPLOYEE_STATUS_FAILURE,
      payload: err,
    });
    console.log('update ====', err);
  }
}

function* categoryStatus({ payload }) {
  try {
    const cat_status = yield call(categoryListStatus, payload);
    yield put({
      type: types.SEND_REQUEST_CATEGORY_STATUS_SUCCESS,
      payload: cat_status,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_CATEGORY_STATUS_FAILURE,
      payload: err,
    });
    console.log('update cat status ====', err);
  }
}

function* getCategoryStock({ payload }) {
  try {
    const cat_stock = yield call(getCategoryStockList, payload);
    yield put({
      type: types.GET_REQUEST_CATEGORY_STOCK_LIST_SUCCESS,
      payload: cat_stock,
    });
  } catch (err) {
    yield put({
      type: types.GET_REQUEST_CATEGORY_STOCK_LIST_FAILURE,
      payload: err,
    });
    console.log('saga cat stock ====>', err);
  }
}

function* productListData() {
  try {
    const pro_data = yield call(getProductListData);
    //console.log('prooooo ~~~~~~~~~~~~~~~~~~~~~~~~~', pro_data);
    yield put({ type: types.GET_PRODUCT_LIST_SUCCESS, payload: pro_data });
  } catch (error) {
    console.log('er----------------------------', error);
    yield put({ type: types.GET_PRODUCT_LIST_FAILURE, payload: error });
  }
}

export default function* loginUserSaga() {
  yield takeEvery(types.SEND_REQUEST_LOGIN, loginUser);
  yield takeEvery(types.SEND_REQUEST_CHANGE_PASSWORD, userChangePassword);
  yield takeEvery(types.GET_REQUEST_CATEGORY, detailCategory);
  yield takeEvery(types.SEND_REQUEST_ADD_CATEGORY, addCategorylist);
  yield takeEvery(types.SEND_REQUEST_DELETE_CATEGORY, deleteCategory);
  yield takeEvery(types.SEND_REQUEST_LOGOUT, LogoutUser);
  yield takeEvery(types.SEND_REQUEST_UPDATE_CATEGORY, updateCategory);
  yield takeEvery(types.GET_EMPLOYEE_DATA, employeeDetails);
  yield takeEvery(types.SEND_REQUEST_EMP_REG_DATA, empRegister);
  yield takeEvery(types.GET_SINGLE_EMPLOYEE_DATA, singleEmpData);
  yield takeEvery(types.SEND_REQUEST_UPDATE_EMPLOYEE, updateEmployee);
  yield takeEvery(types.SEND_REQUEST_EMPLOYEE_STATUS, employeeStatus);
  yield takeEvery(types.SEND_REQUEST_CATEGORY_STATUS, categoryStatus);
  yield takeEvery(types.GET_REQUEST_CATEGORY_STOCK_LIST, getCategoryStock);
  yield takeEvery(types.GET_PRODUCT_LIST, productListData);

}
