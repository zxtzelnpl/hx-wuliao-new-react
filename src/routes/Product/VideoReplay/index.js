import VideoMaterialList from 'components/Material/VideoMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '视频回播';

const path = 'replay';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List = connect(mapStateToProps)(VideoMaterialList)

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  List,
}
