import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '公司介绍';

const path = 'strength/company';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title:title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  List,
}
