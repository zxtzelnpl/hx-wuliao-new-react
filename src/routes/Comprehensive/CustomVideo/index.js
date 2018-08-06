import ComprehensiveVideoMaterialList from 'components/Material/ComprehensiveVideoMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '客服视频';

const path = 'customer/video';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveVideoMaterialList);

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  List,
}
