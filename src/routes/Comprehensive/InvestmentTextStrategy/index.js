import ComprehensiveMaterialList from 'components/Material/ComprehensiveMaterialList';
import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import * as service from "./service";
import * as actionTypes from "./actionTypes";

const mapStateToProps = state =>({
  data:state.SpeechCraft,
  title:'文字策略',
  actionTypes,
  service
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);

export {List,reducer,saga}
