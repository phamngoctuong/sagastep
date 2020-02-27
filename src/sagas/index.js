import { call, fork, put,take } from 'redux-saga/effects';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/task';
import {  getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import * as taskTypes from './../constants/task';
function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
  }
}
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
}
export default rootSaga;