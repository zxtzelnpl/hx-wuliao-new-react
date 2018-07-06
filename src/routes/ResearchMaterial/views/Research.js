import './Research.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import StockPool from './StockPool';

class ResearchMaterial extends Component {

  componentDidMount(){
    const {match,dispatch} = this.props;
    dispatch({
      type:actionTypes.INIT,
      ...match.params
    })
  }

  onPrimarySelect = (id)=>{
    const {dispatch,match} = this.props;
    dispatch({
      type:actionTypes.REQUEST_PRIMARY,
      primaryPhaseId:id,
      ...match.params
    })
  }

  onConcentrateSelect = (id)=>{
    const {dispatch,match} = this.props;
    dispatch({
      type:actionTypes.REQUEST_CONCENTRATE,
      concentratePhaseId:id,
      ...match.params
    })
  }

  render() {
    const {match,data} = this.props;
    const {url} = match;

    return (
      <div className="researchMaterial">
        <StockPool
          title={"初选股票池"}
          url={`${url}/primary`}
          selectId={data.primaryPhaseId}
          list={data.primaryPhaseList}
          info={data.primaryPhaseCurrent}
          onSelect={this.onPrimarySelect}
        />

        <div className="blank-height-10" />

        <StockPool
          title={"精选股票池"}
          url={`${url}/concentrate`}
          selectId={data.concentratePhaseId}
          list={data.concentratePhaseList}
          info={data.concentratePhaseCurrent}
          onSelect={this.onConcentrateSelect}
        />
      </div>
    )
  }
}

const mapStateToProps =state=>({
  data:state.ResearchMaterial
});

export default connect(mapStateToProps)(ResearchMaterial);
