import {take, put, call, fork, select, all, takeEvery} from 'redux-saga/effects'
import {saga as user} from '../components/User';
import {saga as myAlert} from '../components/Alert';
import {saga as MarketingMaterialProduct} from '../routes/MarketingMaterialProduct';
// import {saga as home} from '../routes/Test/index';

export default function* root() {
  yield all([
    fork(myAlert),
    fork(user),
    fork(MarketingMaterialProduct)
  ])
};
