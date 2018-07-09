import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ProductMaterialList from 'components/ProductMaterial/ProductMaterialList';

const mapStateToProps = state =>({
  data:state.ExperienceMaterialWeek,
  actionTypes:actionTypes,
  title:'周报'
});

export default connect(mapStateToProps)(ProductMaterialList);
