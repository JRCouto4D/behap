import { all } from 'redux-saga/effects';

import toast from './toast/sagas';

export default function* rootSaga() {
  return yield all([toast]);
}
