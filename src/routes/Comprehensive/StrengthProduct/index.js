import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '产品展示';

const path = 'strength/product';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title:title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga,title,path,nameSpace}