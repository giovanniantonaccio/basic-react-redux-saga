import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { loginSuccess, loginFailure } from './actions';

function* login({ payload }) {
  try {
    const { username } = payload;

    const response = yield call(api.get, `users/${username}`);

    const { name, bio } = response.data;

    yield put(loginSuccess({ name, bio }));
  } catch (err) {
    yield put(loginFailure());
  }
}

export default all([takeLatest('@auth/LOGIN_REQUEST', login)]);
