import {fork, all} from 'redux-saga/effects'
import {saga as user} from '../components/User';
import {saga as myAlert} from '../components/Alert';
import {saga as SiderChatBox} from '../components/SiderChatBox';
import {saga as CRMVideo} from '../components/CRMVideo';
import {saga as MarketingMaterialProduct} from '../routes/MarketingMaterialProduct';
import {saga as MarketingMaterialRecord} from '../routes/MarketingMaterialRecord';
import {saga as StrategyMaterialPrediction} from '../routes/StrategyMaterialPrediction';
import {saga as StrategyMaterialAnalysis} from '../routes/StrategyMaterialAnalysis';
import {saga as StrategyMaterialReview} from '../routes/StrategyMaterialReview';
import {saga as ExperienceMaterialWeek} from '../routes/ExperienceMaterialWeek';
import {saga as ExperienceMaterialYear} from '../routes/ExperienceMaterialYear';
import {saga as CustomerServiceAnalysis} from '../routes/CustomerServiceAnalysis';
import {saga as CustomerServiceVideo} from '../routes/CustomerServiceVideo';
import {saga as ResearchMaterial} from '../routes/ResearchMaterial';
import {saga as VideoReplay} from '../routes/VideoReplay';
import {saga as LiveVideo} from '../routes/LiveVideo';

import {sagas as Comprehensive} from 'routes/Comprehensive';

export default function* root() {
  yield all([
    fork(SiderChatBox),
    fork(myAlert),
    fork(user),
    fork(MarketingMaterialProduct),
    fork(MarketingMaterialRecord),
    fork(StrategyMaterialPrediction),
    fork(StrategyMaterialAnalysis),
    fork(StrategyMaterialReview),
    fork(ExperienceMaterialWeek),
    fork(ExperienceMaterialYear),
    fork(CustomerServiceAnalysis),
    fork(CustomerServiceVideo),
    fork(ResearchMaterial),
    fork(VideoReplay),
    fork(LiveVideo),
    fork(CRMVideo),
    ...Comprehensive
  ])
};
