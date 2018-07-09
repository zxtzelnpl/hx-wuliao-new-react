import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ProductMaterialList from 'components/ProductMaterial/ProductMaterialList';

const mapStateToProps = state =>({
  data:state.MarketingMaterialRecord,
  actionTypes:actionTypes,
  title:'战绩展示'
});

export default connect(mapStateToProps)(ProductMaterialList);
