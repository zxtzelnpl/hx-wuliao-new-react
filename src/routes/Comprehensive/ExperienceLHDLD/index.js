import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '量化独立队';

const path = 'experience/lhdld';

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
