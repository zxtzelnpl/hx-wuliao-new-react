import React, {Component} from 'react';
import BriefPage from 'components/Pagination/BriefPage';

class StrategyMaterial extends Component {
  render() {
    return (
      <div className="strategyMaterial">
        <BriefPage
          title={'早评'}
          to={"/product/team_qsyx/duanxianbao/strategy/prediction"}
        />
        <BriefPage
          title={'收评'}
          to={"/product/team_qsyx/duanxianbao/strategy/review"}
        />
        <BriefPage
          title={'盘中解盘'}
          to={"/product/team_qsyx/duanxianbao/strategy/analysis"}
        />
      </div>
    )
  }
}

export default StrategyMaterial
