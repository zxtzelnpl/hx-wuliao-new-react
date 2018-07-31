import reducer from './reducer';
import saga from './saga';
import * as actionTypes from './actionTypes';
import {connect} from "react-redux";
import VideoMaterialList from "components/Material/VideoMaterialList";
import nameSpace from './nameSpace';

const title = '视频回播';

const path = 'replay';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List = connect(mapStateToProps)(VideoMaterialList)

export {List,reducer,saga,actionTypes,title,path,nameSpace}
