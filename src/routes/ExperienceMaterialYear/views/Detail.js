import React from 'react';
import ProductMaterialDetail from 'components/ProductMaterial/ProductMaterialDetail';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import * as server from '../service';

const mapStateToProps = state => ({
  data: state.ExperienceMaterialYear,
  actionTypes:actionTypes,
  title:'年报',
  server:server
});

export default connect(mapStateToProps)(ProductMaterialDetail);
