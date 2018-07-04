import {combineReducers} from 'redux';
import {reducer as header} from '../components/Header';
import {reducer as livechat} from '../routes/LiveVideo';

const rootReducer = combineReducers({
  header,
  livechat
});

export default rootReducer;
