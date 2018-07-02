import './Research.less';
import React, {Component} from 'react';
import StockPool from './StockPool';

class ResearchMaterial extends Component {
  render() {
    const {match} = this.props;
    const {url} = match;

    return (
      <div className="researchMaterial">
        <StockPool
          title={"初选股票池"}
          url={`${url}/primary`}
        />
        <StockPool
          title={"精选股票池"}
          url={`${url}/concentrate`}
        />
      </div>
    )
  }
}

export default ResearchMaterial
