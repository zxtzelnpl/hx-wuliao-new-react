import {combineReducers} from 'redux';
import {reducer as myAlert} from '../components/Alert';
import {reducer as header} from '../components/Header';
import {reducer as user} from '../components/User';
import {reducer as SiderChatBox} from '../components/SiderChatBox';
import {reducer as MarketingMaterialProduct} from '../routes/MarketingMaterialProduct';
import {reducer as MarketingMaterialRecord} from '../routes/MarketingMaterialRecord';
import {reducer as StrategyMaterialPrediction} from '../routes/StrategyMaterialPrediction';
import {reducer as StrategyMaterialAnalysis} from '../routes/StrategyMaterialAnalysis';
import {reducer as StrategyMaterialReview} from '../routes/StrategyMaterialReview';
import {reducer as ExperienceMaterialYear} from '../routes/ExperienceMaterialYear';
import {reducer as ExperienceMaterialWeek} from '../routes/ExperienceMaterialWeek';
import {reducer as CustomerServiceAnalysis} from '../routes/CustomerServiceAnalysis';
import {reducer as CustomerServiceVideo} from '../routes/CustomerServiceVideo';
import {reducer as ResearchMaterial} from '../routes/ResearchMaterial';
import {reducer as VideoReplay} from '../routes/VideoReplay';
import {reducer as LiveVideo} from '../routes/LiveVideo';

const rootReducer = combineReducers({
  myAlert,
  header,
  user,
  SiderChatBox,
  MarketingMaterialProduct,
  MarketingMaterialRecord,
  StrategyMaterialPrediction,
  StrategyMaterialAnalysis,
  StrategyMaterialReview,
  ExperienceMaterialYear,
  ExperienceMaterialWeek,
  CustomerServiceAnalysis,
  CustomerServiceVideo,
  ResearchMaterial,
  VideoReplay,
  LiveVideo,
});

export default rootReducer;
