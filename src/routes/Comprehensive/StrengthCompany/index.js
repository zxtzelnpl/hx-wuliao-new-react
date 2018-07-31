import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';

const title = '公司介绍';

const path = 'strength/company';

const mapStateToProps = state =>({
  data:state.ComprehensiveStrengthCompany,
  title:title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga,title,path}
