import React from 'react';
import ProductMaterialDetail from 'components/ProductMaterial/ProductMaterialDetail';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import * as server from '../service';

const mapStateToProps = state => ({
  data: state.StrategyMaterialAnalysis,
  actionTypes:actionTypes,
  title:'盘中解盘',
  server:server
})

export default connect(mapStateToProps)(ProductMaterialDetail)
