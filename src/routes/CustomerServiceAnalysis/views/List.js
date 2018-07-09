import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ProductMaterialList from 'components/ProductMaterial/ProductMaterialList';

const mapStateToProps = state =>({
  data:state.CustomerServiceAnalysis,
  actionTypes:actionTypes,
  title:'持仓分析'
});

export default connect(mapStateToProps)(ProductMaterialList);
