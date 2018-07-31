import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import ProductMaterialList from 'components/Material/ProductMaterialList';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '战绩展示';

const path = 'marketing/record';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List = connect(mapStateToProps)(ProductMaterialList);

export {List,reducer,saga,title,path,nameSpace}
