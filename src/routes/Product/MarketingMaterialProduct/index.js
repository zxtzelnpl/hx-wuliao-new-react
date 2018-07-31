import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import ProductMaterialList from 'components/Material/ProductMaterialList';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '产品案例';

const path = 'marketing/product';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List =  connect(mapStateToProps)(ProductMaterialList);

export {List,reducer,saga,title,path,nameSpace}
