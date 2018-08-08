import {combineReducers} from 'redux';
import {reducer as myAlert} from '../components/Alert';
import {reducer as header} from '../components/Header';
import {reducer as user} from '../components/User';
import {reducer as SiderChatBox} from '../components/SiderChatBox';
import {reducer as CRMVideo} from '../components/CRMVideo';

import {reducer as LiveVideo} from '../routes/LiveVideo';

import {reducer as Product} from 'routes/Product'; //产品素材
import {reducer as Comprehensive} from 'routes/Comprehensive'; //综合素材

const rootReducer = combineReducers({
  myAlert,
  header,
  user,
  SiderChatBox,
  LiveVideo,
  CRMVideo,
  ...Product,
  ...Comprehensive
});

export default rootReducer;
