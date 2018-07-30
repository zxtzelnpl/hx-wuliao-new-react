import React from 'react';
import SiderMenu from 'components/SiderMenu/SiderMenu';
import {Route} from 'react-router-dom';
import {SiderChatBox} from 'components/SiderChatBox';

/*营销素材-营销话术*/
import {
  List as SpeechCraft
} from './ComprehensiveSpeechCraft';
/*营销素材-营销软文*/
import {
  List as ComprehensiveMarketingArticle
} from './ComprehensiveMarketingArticle';
/*营销素材-营销图片*/
import {
  List as ComprehensiveMarketingImage
} from './ComprehensiveMarketingImage';


/*研究统计-营销票*/
import {
  Stock as InvestmentMarketingStock
} from './InvestmentMarketingStock';
/*研究统计-服务票*/
import {
  Stock as InvestmentServiceStock
} from './InvestmentServiceStock';
/*研究统计-文字策略*/
import {
  List as InvestmentTextStrategy
} from './InvestmentTextStrategy';


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
        name:'营销票',
        path:'investment/marketstock'
      },
      {
        name:'服务票',
        path:'investment/servicestock'
      },
      {
        name:'文字策略',
        path:'investment/texttrategy'
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

    <Route exact path={`${match.url}/marketing/speechcraft`} component={SpeechCraft}/>
    <Route exact path={`${match.url}/marketing/article`} component={ComprehensiveMarketingArticle}/>
    <Route exact path={`${match.url}/marketing/image`} component={ComprehensiveMarketingImage}/>

    <Route path={`${match.url}/investment/marketstock`} component={InvestmentMarketingStock}/>
    <Route path={`${match.url}/investment/servicestock`} component={InvestmentServiceStock}/>
    <Route exact path={`${match.url}/investment/texttrategy`} component={InvestmentTextStrategy}/>

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
