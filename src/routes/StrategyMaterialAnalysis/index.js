import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import ProductMaterialList from 'components/Material/ProductMaterialList';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = state =>({
  data:state.StrategyMaterialAnalysis,
  actionTypes:actionTypes,
  title:'盘中解盘'
});

const List = connect(mapStateToProps)(ProductMaterialList);

export {List,reducer,saga}
