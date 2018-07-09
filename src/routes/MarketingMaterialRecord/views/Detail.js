import React from 'react';
import ProductMaterialDetail from 'components/ProductMaterial/ProductMaterialDetail';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import * as server from '../service';

const mapStateToProps = state => ({
  data: state.MarketingMaterialRecord,
  actionTypes:actionTypes,
  title:'战绩展示',
  server:server
})

export default connect(mapStateToProps)(ProductMaterialDetail)
