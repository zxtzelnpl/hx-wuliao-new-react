import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import ProductMaterialList from 'components/Material/ProductMaterialList';
import reducer from './reducer';
import saga from './saga';


const mapStateToProps = state =>({
  data:state.StrategyMaterialPrediction,
  actionTypes:actionTypes,
  title:'早评'
});

const List = connect(mapStateToProps)(ProductMaterialList);

export {List,reducer,saga}
