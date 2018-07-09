import ComprehensiveMaterialList from 'components/ComprehensiveMaterial/ComprehensiveMaterialList';
import ComprehensiveMaterialDetail from 'components/ComprehensiveMaterial/ComprehensiveMaterialDetail';
import React from 'react';
import {connect} from 'react-redux';
import * as service from './service';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = state =>({
  data:state.ComprehensiveMarketingArticle,
  title:'营销软文',
  actionTypes,
  service
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);
const Detail = connect(mapStateToProps)(ComprehensiveMaterialDetail);

export {List,Detail,reducer,saga}
