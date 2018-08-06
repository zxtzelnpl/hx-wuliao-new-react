import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '强势优选队';

const path = 'strategy/qsyxd';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title,
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
