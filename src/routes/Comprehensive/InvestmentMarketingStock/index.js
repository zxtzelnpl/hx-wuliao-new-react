import ServiceStock from 'components/PageStock/PageStock';
import {connect} from 'react-redux';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';

const title = '营销票';

const path = 'investment/marketstock';

const mapStateToProps = state => ({
  data:state[nameSpace],
  title,
  actionTypes
})

const Stock = connect(mapStateToProps)(ServiceStock)

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  Stock,
}
