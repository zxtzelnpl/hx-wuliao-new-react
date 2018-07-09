import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ProductMaterialList from 'components/ProductMaterial/ProductMaterialList';

const mapStateToProps = state =>({
  data:state.StrategyMaterialAnalysis,
  actionTypes:actionTypes,
  title:'盘中解盘'
});

export default connect(mapStateToProps)(ProductMaterialList);
