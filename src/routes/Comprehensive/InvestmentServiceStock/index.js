import ServiceStock from 'components/PageStock/PageStock';
import * as actionTypes from './actionTypes';
import saga from './saga';
import reducer from './reducer';
import {connect} from "react-redux";

const title = '服务票';

const mapStateToProps = state => ({
  data:state.InvestmentServiceStock,
  title,
  actionTypes
})

const Stock = connect(mapStateToProps)(ServiceStock)

export {Stock,saga,reducer,title}
