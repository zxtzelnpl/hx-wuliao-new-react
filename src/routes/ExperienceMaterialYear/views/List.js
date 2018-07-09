import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ProductMaterialList from 'components/ProductMaterial/ProductMaterialList';

const mapStateToProps = state =>({
  data:state.ExperienceMaterialYear,
  actionTypes:actionTypes,
  title:'年报'
});

export default connect(mapStateToProps)(ProductMaterialList);
