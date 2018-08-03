import ComprehensiveVideoMaterialList from 'components/Material/ComprehensiveVideoMaterialList';
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '客服视频';

const path = 'customer/video';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveVideoMaterialList);

export {List,reducer,saga,title,path,nameSpace}