import React from 'react';
import {fork} from 'redux-saga/effects'
import SiderMenuForProduct from 'components/SiderMenu/SiderMenuForProduct';
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
        path: MarketingMaterialProduct.path,
        nameSpace: MarketingMaterialProduct.nameSpace,
        ComprehensiveLink: MarketingMaterialProduct.ComprehensiveLink,
      },
      {
        name: MarketingMaterialRecord.title,
        path: MarketingMaterialRecord.path,
        nameSpace: MarketingMaterialRecord.nameSpace,
        ComprehensiveLink: MarketingMaterialRecord.ComprehensiveLink,
      },
    ]
  },
  {
    title: '策略素材',
    lis: [
      {
        name: StrategyMaterialPrediction.title,
        path: StrategyMaterialPrediction.path,
        nameSpace: StrategyMaterialPrediction.nameSpace,
        ComprehensiveLink: StrategyMaterialPrediction.ComprehensiveLink,
      },
      {
        name: StrategyMaterialReview.title,
        path: StrategyMaterialReview.path,
        nameSpace: StrategyMaterialReview.nameSpace,
        ComprehensiveLink: StrategyMaterialReview.ComprehensiveLink,
      },
      {
        name: StrategyMaterialAnalysis.title,
        path: StrategyMaterialAnalysis.path,
        nameSpace: StrategyMaterialAnalysis.nameSpace,
        ComprehensiveLink: StrategyMaterialAnalysis.ComprehensiveLink,
      },
    ]
  },
  {
    title: '体验素材',
    lis: [
      {
        name: ExperienceMaterialWeek.title,
        path: ExperienceMaterialWeek.path,
        nameSpace: ExperienceMaterialWeek.nameSpace,
        ComprehensiveLink: ExperienceMaterialWeek.ComprehensiveLink,
      },
      {
        name: ExperienceMaterialYear.title,
        path: ExperienceMaterialYear.path,
        nameSpace: ExperienceMaterialYear.nameSpace,
        ComprehensiveLink: ExperienceMaterialYear.ComprehensiveLink,
      },
    ]
  },
  {
    title: '客服素材',
    lis: [
      {
        name: CustomerServiceAnalysis.title,
        path: CustomerServiceAnalysis.path,
        nameSpace: CustomerServiceAnalysis.nameSpace,
        ComprehensiveLink: CustomerServiceAnalysis.ComprehensiveLink,
      },
      {
        name: CustomerServiceVideo.title,
        path: CustomerServiceVideo.path,
        nameSpace: CustomerServiceVideo.nameSpace,
        ComprehensiveLink: CustomerServiceVideo.ComprehensiveLink,
      },
    ]
  },
  // {
  //   title: '研究素材',
  //   lis:[
  //     {
  //       name: ResearchMaterial.title,
  //       path: ResearchMaterial.path,
  //       service: ResearchMaterial.service,
  //     }
  //   ],
  // },
  {
    title: '视频回播',
    lis:[
      {
        name: VideoReplay.title,
        path: VideoReplay.path,
        nameSpace: VideoReplay.nameSpace,
        ComprehensiveLink: VideoReplay.ComprehensiveLink,
      }
    ],
  },
]

export const MyRoute = ({match}) => {
  return (
    <div className="productMaterialsLayout">
      <SiderMenuForProduct match={match} menus={productMenus} title={"产品素材"}/>

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
  [ResearchMaterial.nameSpace]:ResearchMaterial.reducer,
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
