import ComprehensiveMaterialList from 'components/ComprehensiveMaterial/ComprehensiveMaterialList';
import ComprehensiveMaterialDetail from 'components/ComprehensiveMaterial/ComprehensiveMaterialDetail';
import React from 'react';
import {connect} from 'react-redux';
import * as service from './service';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = state =>({
  data:state.SpeechCraft,
  title:'营销话术',
  actionTypes,
  service
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);
const Detail = connect(mapStateToProps)(ComprehensiveMaterialDetail);

export {List,Detail,reducer,saga}
