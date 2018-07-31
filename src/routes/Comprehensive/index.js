import React from 'react';
import SiderMenu from 'components/SiderMenu/SiderMenu';
import {Route} from 'react-router-dom';
import {SiderChatBox} from 'components/SiderChatBox';

/*营销素材-营销话术*/
import {
  List as ComprehensiveMarketingSpeechCraft
} from './MarketingSpeechCraft';
/*营销素材-营销软文*/
import {
  List as ComprehensiveMarketingArticle
} from './MarketingArticle';
/*营销素材-营销图片*/
import {
  List as ComprehensiveMarketingImage
} from './MarketingImage';


import * as InvestmentMarketingStock from './InvestmentMarketingStock'; // 研究统计-营销票
import * as InvestmentServiceStock from './InvestmentServiceStock'; // 研究统计-服务票
import * as InvestmentTextStrategy from './InvestmentTextStrategy'; // 研究统计-文字策略



/*实力展示-公司介绍*/
import {
  List as ComprehensiveStrengthCompany
} from './StrengthCompany';
/*实力展示-公司介绍*/
import {
  List as ComprehensiveStrengthLicence
} from './StrengthLicence';
/*实力展示-公司介绍*/
import {
  List as ComprehensiveStrengthTeacher
} from './StrengthTeacher';

console.log(InvestmentMarketingStock);

const comprehensiveMenus = [
  {
    title:'营销素材',
    lis:[
      {
        name:'营销话术',
        path:'marketing/speechcraft'
      },
      {
        name:'营销方案',
        path:'marketing/article'
      },
      {
        name:'营销图片',
        path:'marketing/image'
      }
    ]
  },
  {
    title:'研究统计',
    lis:[
      {
        name:InvestmentMarketingStock.title,
        path:InvestmentMarketingStock.path
      },
      {
        name:InvestmentServiceStock.title,
        path:InvestmentServiceStock.path
      },
      {
        name:InvestmentTextStrategy.title,
        path:InvestmentTextStrategy.path
      }
    ]
  },
  {
    title:'实力展示',
    lis:[
      {
        name:'公司介绍',
        path:'strength/company'
      },
      {
        name:'老师介绍',
        path:'strength/teacher'
      },
      {
        name:'证照展示',
        path:'strength/licence'
      }
    ]
  }
];


const Comprehensive = ({match}) => (
  <div className="comprehensiveMaterialsLayout">
    <SiderMenu match={match} menus={comprehensiveMenus} title={"综合素材"}/>

    <Route exact path={`${match.url}/marketing/speechcraft`} component={ComprehensiveMarketingSpeechCraft}/>
    <Route exact path={`${match.url}/marketing/article`} component={ComprehensiveMarketingArticle}/>
    <Route exact path={`${match.url}/marketing/image`} component={ComprehensiveMarketingImage}/>

    <Route exact path={`${match.url}/${InvestmentMarketingStock.path}`} component={InvestmentMarketingStock.Stock}/>
    <Route exact path={`${match.url}/${InvestmentServiceStock.path}`} component={InvestmentServiceStock.Stock}/>
    <Route exact path={`${match.url}/${InvestmentTextStrategy.path}`} component={InvestmentTextStrategy.List}/>

    <Route exact path={`${match.url}/strength/company`} component={ComprehensiveStrengthCompany}/>
    <Route exact path={`${match.url}/strength/teacher`} component={ComprehensiveStrengthTeacher}/>
    <Route exact path={`${match.url}/strength/licence`} component={ComprehensiveStrengthLicence}/>

    {/*侧边聊天*/}
    <Route path={`${match.url}/marketing`} component={SiderChatBox}/>
    <Route path={`${match.url}/investment/texttrategy`} component={SiderChatBox}/>
    <Route path={`${match.url}/strength`} component={SiderChatBox}/>
  </div>
)


export default Comprehensive
