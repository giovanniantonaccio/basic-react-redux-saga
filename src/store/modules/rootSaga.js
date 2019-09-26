import { all } from 'redux-saga/effects';

// import count from './count/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
