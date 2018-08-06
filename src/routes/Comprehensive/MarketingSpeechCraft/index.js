import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '营销话术';

const path = 'marketing/speechcraft';

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
