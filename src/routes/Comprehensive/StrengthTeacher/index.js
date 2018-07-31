import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';

const title = '老师介绍';

const path = 'strength/teacher';

const mapStateToProps = state =>({
  data:state.ComprehensiveStrengthTeacher,
  title:title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga,title,path}
