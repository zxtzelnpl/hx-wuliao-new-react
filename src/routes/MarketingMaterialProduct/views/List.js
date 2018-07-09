import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ProductMaterialList from 'components/ProductMaterial/ProductMaterialList';

const mapStateToProps = state =>({
  data:state.MarketingMaterialProduct,
  actionTypes:actionTypes,
  title:'产品案例'
});

export default connect(mapStateToProps)(ProductMaterialList);
