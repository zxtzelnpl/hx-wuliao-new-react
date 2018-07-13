import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import VideoMaterialList from 'components/Material/VideoMaterialList';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = state =>({
  data:state.CustomerServiceVideo,
  title:'服务视频',
  actionTypes
});

const List = connect(mapStateToProps)(VideoMaterialList)

export {List,reducer,saga}
