import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '强势优选队';

const path = 'experience/qsyxd';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga,title,path,nameSpace}
