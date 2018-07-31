import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import ProductMaterialList from 'components/Material/ProductMaterialList';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '盘中解盘';

const path = 'strategy/analysis';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List = connect(mapStateToProps)(ProductMaterialList);

export {List,reducer,saga,title,path,nameSpace}
