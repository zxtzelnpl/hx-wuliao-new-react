import React from 'react';
import {fork} from 'redux-saga/effects'
import SiderMenu from 'components/SiderMenu/SiderMenu';
import {Route} from 'react-router-dom';
import {SiderFeaturedVideos} from 'components/CRMVideo';

import * as MarketingMaterialProduct from './MarketingMaterialProduct'; // 营销素材-产品案例
import * as MarketingMaterialRecord from './MarketingMaterialRecord'; // 营销素材-战绩展示

import * as StrategyMaterialPrediction from './StrategyMaterialPrediction'; // 策略素材-早评
import * as StrategyMaterialReview from './StrategyMaterialReview'; // 策略素材-收评
import * as StrategyMaterialAnalysis from './StrategyMaterialAnalysis'; // 策略素材-盘中解盘

import * as ExperienceMaterialWeek from './ExperienceMaterialWeek'; // 体验素材-周报
import * as ExperienceMaterialYear from './ExperienceMaterialYear'; // 体验素材-年报

import * as CustomerServiceAnalysis from './CustomerServiceAnalysis'; // 客服素材-持仓分析
import * as CustomerServiceVideo from './CustomerServiceVideo'; // 客服素材-服务视频

import * as ResearchMaterial from './ResearchMaterial'; // 研究素材

import * as VideoReplay from './VideoReplay'; // 视频回播

const productMenus = [
  {
    title: '营销素材',
    lis: [
      {
        name: MarketingMaterialProduct.title,
        path: MarketingMaterialProduct.path
      },
      {
        name: MarketingMaterialRecord.title,
        path: MarketingMaterialRecord.path
      },
    ]
  },
  {
    title: '策略素材',
    lis: [
      {
        name: StrategyMaterialPrediction.title,
        path: StrategyMaterialPrediction.path
      },
      {
        name: StrategyMaterialReview.title,
        path: StrategyMaterialReview.path
      },
      {
        name: StrategyMaterialAnalysis.title,
        path: StrategyMaterialAnalysis.path
      },
    ]
  },
  {
    title: '体验素材',
    lis: [
      {
        name: ExperienceMaterialWeek.title,
        path: ExperienceMaterialWeek.path
      },
      {
        name: ExperienceMaterialYear.title,
        path: ExperienceMaterialYear.path
      },
    ]
  },
  {
    title: '客服素材',
    lis: [
      {
        name: CustomerServiceAnalysis.title,
        path: CustomerServiceAnalysis.path
      },
      {
        name: CustomerServiceVideo.title,
        path: CustomerServiceVideo.path
      },
    ]
  },
  {
    title: ResearchMaterial.title,
    path: ResearchMaterial.path
  },
  {
    title: VideoReplay.title,
    path: VideoReplay.path
  },
]

export const MyRoute = ({match}) => {
  return (
    <div className="productMaterialsLayout">
      <SiderMenu match={match} menus={productMenus} title={"产品素材"}/>

      <div className="productMaterialsContent">
        <Route exact path={`${match.path}/${MarketingMaterialProduct.path}`} component={MarketingMaterialProduct.List}/>
        <Route exact path={`${match.path}/${MarketingMaterialRecord.path}`} component={MarketingMaterialRecord.List}/>

        <Route exact path={`${match.path}/${StrategyMaterialPrediction.path}`} component={StrategyMaterialPrediction.List}/>
        <Route exact path={`${match.path}/${StrategyMaterialReview.path}`} component={StrategyMaterialReview.List}/>
        <Route exact path={`${match.path}/${StrategyMaterialAnalysis.path}`} component={StrategyMaterialAnalysis.List}/>

        <Route exact path={`${match.path}/${ExperienceMaterialWeek.path}`} component={ExperienceMaterialWeek.List}/>
        <Route exact path={`${match.path}/${ExperienceMaterialYear.path}`} component={ExperienceMaterialYear.List}/>

        <Route exact path={`${match.path}/${CustomerServiceAnalysis.path}`} component={CustomerServiceAnalysis.List}/>
        <Route exact path={`${match.path}/${CustomerServiceVideo.path}`} component={CustomerServiceVideo.List}/>


        <Route exact path={`${match.path}/${ResearchMaterial.path}`} component={ResearchMaterial.Research}/>

        <Route path={`${match.path}/${VideoReplay.path}`} component={VideoReplay.List}/>
      </div>

      <div className="siderRecommend">
        <SiderFeaturedVideos match={match}/>
      </div>
    </div>
  )
}

export const reducer = {
  [MarketingMaterialProduct.nameSpace]:MarketingMaterialProduct.reducer,
  [MarketingMaterialRecord.nameSpace]:MarketingMaterialRecord.reducer,
  [StrategyMaterialPrediction.nameSpace]:StrategyMaterialPrediction.reducer,
  [StrategyMaterialReview.nameSpace]:StrategyMaterialReview.reducer,
  [StrategyMaterialAnalysis.nameSpace]:StrategyMaterialAnalysis.reducer,
  [ExperienceMaterialWeek.nameSpace]:ExperienceMaterialWeek.reducer,
  [ExperienceMaterialYear.nameSpace]:ExperienceMaterialYear.reducer,
  [CustomerServiceAnalysis.nameSpace]:CustomerServiceAnalysis.reducer,
  ResearchMaterial:ResearchMaterial.reducer,
  [CustomerServiceVideo.nameSpace]:CustomerServiceVideo.reducer,
  [VideoReplay.nameSpace]:VideoReplay.reducer,
}

export const sagas = [
  fork(MarketingMaterialProduct.saga),
  fork(MarketingMaterialRecord.saga),
  fork(StrategyMaterialPrediction.saga),
  fork(StrategyMaterialReview.saga),
  fork(StrategyMaterialAnalysis.saga),
  fork(ExperienceMaterialWeek.saga),
  fork(ExperienceMaterialYear.saga),
  fork(CustomerServiceAnalysis.saga),
  fork(ResearchMaterial.saga),
  fork(CustomerServiceVideo.saga),
  fork(VideoReplay.saga),
]
