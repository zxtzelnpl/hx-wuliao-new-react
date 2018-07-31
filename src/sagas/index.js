import {fork, all} from 'redux-saga/effects'
import {saga as user} from '../components/User';
import {saga as myAlert} from '../components/Alert';
import {saga as SiderChatBox} from '../components/SiderChatBox';
import {saga as CRMVideo} from '../components/CRMVideo';
import {saga as LiveVideo} from '../routes/LiveVideo';
import {sagas as Product} from 'routes/Product';
import {sagas as Comprehensive} from 'routes/Comprehensive';

export default function* root() {
  yield all([
    fork(SiderChatBox),
    fork(myAlert),
    fork(user),
    fork(LiveVideo),
    fork(CRMVideo),
    ...Product,
    ...Comprehensive
  ])
};
