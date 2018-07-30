import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import * as service from "./service";
import * as actionTypes from "./actionTypes";

const title = '文字策略';

const mapStateToProps = state =>({
  data:state.InvestmentTextStrategy,
  title,
  actionTypes,
  service
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga,title}
