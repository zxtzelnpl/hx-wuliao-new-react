import {combineReducers} from 'redux';
import {reducer as myAlert} from '../components/Alert';
import {reducer as header} from '../components/Header';
import {reducer as user} from '../components/User';
import {reducer as livechat} from '../routes/LiveVideo';
import {reducer as MarketingMaterialProduct} from '../routes/MarketingMaterialProduct';

const rootReducer = combineReducers({
  myAlert,
  header,
  livechat,
  user,
  MarketingMaterialProduct
});

export default rootReducer;
