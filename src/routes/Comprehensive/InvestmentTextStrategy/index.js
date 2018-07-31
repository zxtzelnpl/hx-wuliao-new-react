import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import * as actionTypes from "./actionTypes";
import nameSpace from './nameSpace';

const title = '文字策略';

const path = 'investment/texttrategy';

const mapStateToProps = state =>({
  data:state[nameSpace],
  title,
  actionTypes
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga,title,path,nameSpace}
