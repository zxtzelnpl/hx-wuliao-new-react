import React from 'react';
import {fork} from 'redux-saga/effects';
import Banner from 'components/Banner/Banner';
import SiderMenuForComprehensive from 'components/SiderMenu/SiderMenuForComprehensive';
import {Route} from 'react-router-dom';
import {SiderChatBox} from 'components/SiderChatBox';


import * as MarketingArticle from './MarketingArticle'; // 营销素材-营销软文
import * as MarketingImage from './MarketingImage'; // 营销素材-营销图片
import * as MarketingSpeechCraft from './MarketingSpeechCraft'; // 营销素材-营销话术

import * as InvestmentMarketingStock from './InvestmentMarketingStock'; // 研究统计-营销票
import * as InvestmentServiceStock from './InvestmentServiceStock'; // 研究统计-服务票
import * as InvestmentTextStrategy from './InvestmentTextStrategy'; // 研究统计-文字策略

import * as StrengthCompany from './StrengthCompany'; // 实力展示-公司介绍
import * as StrengthLicence from './StrengthLicence'; // 实力展示-证照展示
import * as StrengthTeacher from './StrengthTeacher'; // 实力展示-老师介绍
import * as StrengthProduct from './StrengthProduct'; // 实力展示-产品展示

import * as CustomSpeechCraft from './CustomSpeechCraft'; // 客服素材-客服话术
import * as CustomVideo from './CustomVideo'; // 客服素材-客服视频

import * as StrategyQSYXD from './StrategyQSYXD'; // 策略素材-强势优选队
import * as StrategyLHDLD from './StrategyLHDLD'; // 策略素材-量化独立队

import * as ExperienceQSYXD from './ExperienceQSYXD'; // 体验素材-强势优选队
import * as ExperienceLHDLD from './ExperienceLHDLD'; // 体验素材-量化独立队

const comprehensiveMenus = [
  {
    title: '营销素材',
    lis: [
      {
        name: MarketingArticle.title,
        path: MarketingArticle.path,
        nameSpace: MarketingArticle.nameSpace,
        ComprehensiveLink: MarketingArticle.ComprehensiveLink,
      },
      {
        name: MarketingImage.title,
        path: MarketingImage.path,
        nameSpace: MarketingImage.nameSpace,
        ComprehensiveLink: MarketingImage.ComprehensiveLink,
      },
      {
        name: MarketingSpeechCraft.title,
        path: MarketingSpeechCraft.path,
        nameSpace: MarketingSpeechCraft.nameSpace,
        ComprehensiveLink: MarketingSpeechCraft.ComprehensiveLink,
      },
    ]
  },
  {
    title: '研究统计',
    lis: [
      {
        name: InvestmentMarketingStock.title,
        path: InvestmentMarketingStock.path,
        nameSpace: InvestmentMarketingStock.nameSpace,
        ComprehensiveLink: InvestmentMarketingStock.ComprehensiveLink,
      },
      {
        name: InvestmentServiceStock.title,
        path: InvestmentServiceStock.path,
        nameSpace: InvestmentServiceStock.nameSpace,
        ComprehensiveLink: InvestmentServiceStock.ComprehensiveLink,
      },
      {
        name: InvestmentTextStrategy.title,
        path: InvestmentTextStrategy.path,
        nameSpace: InvestmentTextStrategy.nameSpace,
        ComprehensiveLink: InvestmentTextStrategy.ComprehensiveLink,
      },
    ]
  },
  {
    title: '实力展示',
    lis: [
      {
        name: StrengthCompany.title,
        path: StrengthCompany.path,
        nameSpace: StrengthCompany.nameSpace,
        ComprehensiveLink: StrengthCompany.ComprehensiveLink,
      },
      {
        name: StrengthLicence.title,
        path: StrengthLicence.path,
        nameSpace: StrengthLicence.nameSpace,
        ComprehensiveLink: StrengthLicence.ComprehensiveLink,
      },
      {
        name: StrengthTeacher.title,
        path: StrengthTeacher.path,
        nameSpace: StrengthTeacher.nameSpace,
        ComprehensiveLink: StrengthTeacher.ComprehensiveLink,
      },
      {
        name: StrengthProduct.title,
        path: StrengthProduct.path,
        nameSpace: StrengthProduct.nameSpace,
        ComprehensiveLink: StrengthProduct.ComprehensiveLink,
      },
    ]
  },
  {
    title:'客服素材',
    lis:[
      {
        name:CustomSpeechCraft.title,
        path:CustomSpeechCraft.path,
        nameSpace:CustomSpeechCraft.nameSpace,
        ComprehensiveLink:CustomSpeechCraft.ComprehensiveLink,
      },
      {
        name:CustomVideo.title,
        path:CustomVideo.path,
        nameSpace:CustomVideo.nameSpace,
        ComprehensiveLink:CustomVideo.ComprehensiveLink,
      },
    ]
  },
  {
    title:'策略素材',
    lis:[
      {
        name:StrategyQSYXD.title,
        path:StrategyQSYXD.path,
        nameSpace:StrategyQSYXD.nameSpace,
        ComprehensiveLink:StrategyQSYXD.ComprehensiveLink,
      },
      {
        name:StrategyLHDLD.title,
        path:StrategyLHDLD.path,
        nameSpace:StrategyLHDLD.nameSpace,
        ComprehensiveLink:StrategyLHDLD.ComprehensiveLink,
      },
    ]
  },
  {
    title:'体验素材',
    lis:[
      {
        name:ExperienceQSYXD.title,
        path:ExperienceQSYXD.path,
        nameSpace:ExperienceQSYXD.nameSpace,
        ComprehensiveLink:ExperienceQSYXD.ComprehensiveLink,
      },
      {
        name:ExperienceLHDLD.title,
        path:ExperienceLHDLD.path,
        nameSpace:ExperienceLHDLD.nameSpace,
        ComprehensiveLink:ExperienceLHDLD.ComprehensiveLink,
      },
    ]
  },
];


export const MyRoute = ({match}) => (
  <div>
    <Banner />
    <div className="comprehensiveMaterialsLayout">
      <SiderMenuForComprehensive match={match} menus={comprehensiveMenus} title={"综合素材"}/>

      <Route exact path={`${match.url}/${MarketingArticle.path}`} component={MarketingArticle.List}/>
      <Route exact path={`${match.url}/${MarketingImage.path}`} component={MarketingImage.List}/>
      <Route exact path={`${match.url}/${MarketingSpeechCraft.path}`} component={MarketingSpeechCraft.List}/>

      <Route exact path={`${match.url}/${InvestmentMarketingStock.path}`} component={InvestmentMarketingStock.List}/>
      <Route exact path={`${match.url}/${InvestmentServiceStock.path}`} component={InvestmentServiceStock.List}/>
      <Route exact path={`${match.url}/${InvestmentTextStrategy.path}`} component={InvestmentTextStrategy.List}/>

      <Route exact path={`${match.url}/${StrengthCompany.path}`} component={StrengthCompany.List}/>
      <Route exact path={`${match.url}/${StrengthLicence.path}`} component={StrengthLicence.List}/>
      <Route exact path={`${match.url}/${StrengthTeacher.path}`} component={StrengthTeacher.List}/>
      <Route exact path={`${match.url}/${StrengthProduct.path}`} component={StrengthProduct.List}/>

      <Route exact path={`${match.url}/${CustomSpeechCraft.path}`} component={CustomSpeechCraft.List}/>
      <Route exact path={`${match.url}/${CustomVideo.path}`} component={CustomVideo.List}/>

      <Route exact path={`${match.url}/${StrategyQSYXD.path}`} component={StrategyQSYXD.List}/>
      <Route exact path={`${match.url}/${StrategyLHDLD.path}`} component={StrategyLHDLD.List}/>

      <Route exact path={`${match.url}/${ExperienceQSYXD.path}`} component={ExperienceQSYXD.List}/>
      <Route exact path={`${match.url}/${ExperienceLHDLD.path}`} component={ExperienceLHDLD.List}/>

      {/*侧边聊天-股票是没有的*/}
      <Route path={`${match.url}/marketing`} component={SiderChatBox}/>
      <Route path={`${match.url}/investment/texttrategy`} component={SiderChatBox}/>
      <Route path={`${match.url}/strength`} component={SiderChatBox}/>
      <Route path={`${match.url}/custom`} component={SiderChatBox}/>
      <Route path={`${match.url}/strategy`} component={SiderChatBox}/>
      <Route path={`${match.url}/experience`} component={SiderChatBox}/>
    </div>
  </div>
)

export const reducer = {
  [MarketingArticle.nameSpace]:MarketingArticle.reducer,
  [MarketingImage.nameSpace]:MarketingImage.reducer,
  [MarketingSpeechCraft.nameSpace]:MarketingSpeechCraft.reducer,
  [InvestmentMarketingStock.nameSpace]:InvestmentMarketingStock.reducer,
  [InvestmentServiceStock.nameSpace]:InvestmentServiceStock.reducer,
  [InvestmentTextStrategy.nameSpace]:InvestmentTextStrategy.reducer,
  [StrengthCompany.nameSpace]:StrengthCompany.reducer,
  [StrengthLicence.nameSpace]:StrengthLicence.reducer,
  [StrengthTeacher.nameSpace]:StrengthTeacher.reducer,
  [StrengthProduct.nameSpace]:StrengthProduct.reducer,
  [CustomSpeechCraft.nameSpace]:CustomSpeechCraft.reducer,
  [CustomVideo.nameSpace]:CustomVideo.reducer,
  [StrategyQSYXD.nameSpace]:StrategyQSYXD.reducer,
  [StrategyLHDLD.nameSpace]:StrategyLHDLD.reducer,
  [ExperienceQSYXD.nameSpace]:ExperienceQSYXD.reducer,
  [ExperienceLHDLD.nameSpace]:ExperienceLHDLD.reducer,
}

export const sagas = [
  fork(MarketingArticle.saga),
  fork(MarketingImage.saga),
  fork(MarketingSpeechCraft.saga),
  fork(InvestmentMarketingStock.saga),
  fork(InvestmentServiceStock.saga),
  fork(InvestmentTextStrategy.saga),
  fork(StrengthCompany.saga),
  fork(StrengthLicence.saga),
  fork(StrengthTeacher.saga),
  fork(StrengthProduct.saga),
  fork(CustomSpeechCraft.saga),
  fork(CustomVideo.saga),
  fork(StrategyQSYXD.saga),
  fork(StrategyLHDLD.saga),
  fork(ExperienceQSYXD.saga),
  fork(ExperienceLHDLD.saga),
]
