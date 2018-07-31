import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import VideoMaterialList from 'components/Material/VideoMaterialList';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const title = '服务视频';

const path = 'customer/video';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List = connect(mapStateToProps)(VideoMaterialList)

export {List,reducer,saga,nameSpace,title,path}
