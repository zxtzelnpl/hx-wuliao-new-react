import ComprehensiveMaterialList from 'components/ComprehensiveMaterial/ComprehensiveMaterialList';
import ComprehensiveMaterialDetail from 'components/ComprehensiveMaterial/ComprehensiveMaterialDetail';
import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import * as service from "src/routes/ComprehensiveSpeechCraft/service";
import * as actionTypes from "src/routes/ComprehensiveSpeechCraft/actionTypes";

const mapStateToProps = state =>({
  data:state.SpeechCraft,
  title:'文字策略',
  actionTypes,
  service
});

const List = connect(mapStateToProps)(ComprehensiveMaterialList);
const Detail = connect(mapStateToProps)(ComprehensiveMaterialDetail);

export {List,Detail,reducer,saga}