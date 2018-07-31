import React from 'react';
import SiderMenu from 'components/SiderMenu/SiderMenu';
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

console.log(InvestmentMarketingStock);

const comprehensiveMenus = [
  {
    title: '营销素材',
    lis: [
      {
        name: MarketingArticle.title,
        path: MarketingArticle.path
      },
      {
        name: MarketingImage.title,
        path: MarketingImage.path
      },
      {
        name: MarketingSpeechCraft.title,
        path: MarketingSpeechCraft.path
      }
    ]
  },
  {
    title: '研究统计',
    lis: [
      {
        name: InvestmentMarketingStock.title,
        path: InvestmentMarketingStock.path
      },
      {
        name: InvestmentServiceStock.title,
        path: InvestmentServiceStock.path
      },
      {
        name: InvestmentTextStrategy.title,
        path: InvestmentTextStrategy.path
      }
    ]
  },
  {
    title: '实力展示',
    lis: [
      {
        name: StrengthCompany.title,
        path: StrengthCompany.path
      },
      {
        name: StrengthLicence.title,
        path: StrengthLicence.path
      },
      {
        name: StrengthTeacher.title,
        path: StrengthTeacher.path
      }
    ]
  }
];


const Comprehensive = ({match}) => (
  <div className="comprehensiveMaterialsLayout">
    <SiderMenu match={match} menus={comprehensiveMenus} title={"综合素材"}/>

    <Route exact path={`${match.url}/${MarketingArticle.path}`} component={MarketingArticle.List}/>
    <Route exact path={`${match.url}/${MarketingImage.path}`} component={MarketingImage.List}/>
    <Route exact path={`${match.url}/${MarketingSpeechCraft.path}`} component={MarketingSpeechCraft.List}/>

    <Route exact path={`${match.url}/${InvestmentMarketingStock.path}`} component={InvestmentMarketingStock.Stock}/>
    <Route exact path={`${match.url}/${InvestmentServiceStock.path}`} component={InvestmentServiceStock.Stock}/>
    <Route exact path={`${match.url}/${InvestmentTextStrategy.path}`} component={InvestmentTextStrategy.List}/>

    <Route exact path={`${match.url}/${StrengthCompany.path}`} component={StrengthCompany.List}/>
    <Route exact path={`${match.url}/${StrengthLicence.path}`} component={StrengthLicence.List}/>
    <Route exact path={`${match.url}/${StrengthTeacher.path}`} component={StrengthTeacher.List}/>

    {/*侧边聊天-股票是没有的*/}
    <Route path={`${match.url}/marketing`} component={SiderChatBox}/>
    <Route path={`${match.url}/investment/texttrategy`} component={SiderChatBox}/>
    <Route path={`${match.url}/strength`} component={SiderChatBox}/>
  </div>
)


export default Comprehensive
