import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import React from 'react';
import {connect} from 'react-redux';
import * as service from './service';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = state =>({
  data:state.ComprehensiveMarketingArticle,
  title:'营销图片',
  actionTypes,
  service
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga}
