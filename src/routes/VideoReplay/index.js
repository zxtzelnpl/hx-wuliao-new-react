import reducer from './reducer';
import saga from './saga';
import * as actionTypes from './actionTypes';
import {connect} from "react-redux";
import VideoMaterialList from "components/Material/VideoMaterialList";

const mapStateToProps = state =>({
  data:state.VideoReplay,
  title:'视频回播',
  actionTypes
});

const List = connect(mapStateToProps)(VideoMaterialList)

export {List,reducer,saga,actionTypes}
