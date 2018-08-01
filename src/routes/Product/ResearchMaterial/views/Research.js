import './Research.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import StockPool from './StockPool';

class ResearchMaterial extends Component {

  componentDidMount(){
    if(this.props.data.primaryPhaseList.length===0||
      this.props.data.concentratePhaseList.length===0||
      !this.props.data.receivedAt||
      this.props.data.team!==this.props.match.params.team||
      this.props.data.child!==this.props.match.params.child){
      this.init()
    }
  }

  componentDidUpdate(){
    if(this.props.data.team!==this.props.match.params.team||
      this.props.data.child!==this.props.match.params.child
    ){
      this.init();
    }
  }

  init(){
    const {match,dispatch} = this.props;
    dispatch({
      type:actionTypes.INIT,
      urlParams:match.params
    })
  }

  onPrimarySelect = (id)=>{
    const {dispatch,match} = this.props;
    dispatch({
      type:actionTypes.REQUEST_PRIMARY,
      urlParams:match.params,
      params:{
        phase:id
      }
    })
  }

  onConcentrateSelect = (id)=>{
    const {dispatch,match} = this.props;
    dispatch({
      type:actionTypes.REQUEST_CONCENTRATE,
      urlParams:match.params,
      params:{
        phase:id
      }
    })
  }

  render() {
    const {match,data} = this.props;
    const {url} = match;

    console.log(data)

    if(data.error){
      return <div className="no-data">暂无数据</div>
    }
    else{
      return (
        <div className="researchMaterial">
          <StockPool
            title={"初选股票池"}
            url={`${url}/primary`}
            selectId={data.primaryPhaseId}
            list={data.primaryPhaseList}
            info={data.primaryPhaseCurrent}
            receivedAt={data.receivedAt}
            onSelect={this.onPrimarySelect}
          />

          <div className="blank-height-10" />

          <StockPool
            title={"精选股票池"}
            url={`${url}/concentrate`}
            selectId={data.concentratePhaseId}
            list={data.concentratePhaseList}
            info={data.concentratePhaseCurrent}
            receivedAt={data.receivedAt}
            onSelect={this.onConcentrateSelect}
          />
        </div>
      )
    }
  }
}

const mapStateToProps =state=>({
  data:state.ResearchMaterial
});

export default connect(mapStateToProps)(ResearchMaterial);
