import {combineReducers} from 'redux';
import {reducer as myAlert} from '../components/Alert';
import {reducer as header} from '../components/Header';
import {reducer as user} from '../components/User';
import {reducer as livechat} from '../routes/LiveVideo';
import {reducer as MarketingMaterialProduct} from '../routes/MarketingMaterialProduct';
import {reducer as MarketingMaterialRecord} from '../routes/MarketingMaterialRecord';
import {reducer as StrategyMaterialPrediction} from '../routes/StrategyMaterialPrediction';
import {reducer as StrategyMaterialAnalysis} from '../routes/StrategyMaterialAnalysis';
import {reducer as StrategyMaterialReview} from '../routes/StrategyMaterialReview';

const rootReducer = combineReducers({
  myAlert,
  header,
  livechat,
  user,
  MarketingMaterialProduct,
  MarketingMaterialRecord,
  StrategyMaterialPrediction,
  StrategyMaterialAnalysis,
  StrategyMaterialReview,
});

export default rootReducer;
