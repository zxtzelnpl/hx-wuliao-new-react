import ProductMaterialList from 'components/Material/ProductMaterialList';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '收评';

const path = 'strategy/review';

const mapStateToProps = state =>({
  data:state[nameSpace],
  actionTypes,
  title
});

const List = connect(mapStateToProps)(ProductMaterialList);

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  List,
}
