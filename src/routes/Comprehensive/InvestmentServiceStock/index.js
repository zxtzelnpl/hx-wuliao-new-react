import ServiceStock from 'components/PageStock/PageStock';
import * as actionTypes from './actionTypes';
import saga from './saga';
import reducer from './reducer';
import {connect} from "react-redux";
import nameSpace from './nameSpace';

const title = '服务票';

const path = 'investment/servicestock';

const mapStateToProps = state => ({
  data:state[nameSpace],
  title,
  actionTypes
})

const Stock = connect(mapStateToProps)(ServiceStock)

export {Stock,saga,reducer,title,path,nameSpace}
