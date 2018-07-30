import ServiceStock from 'components/PageStock/PageStock';
import * as actionTypes from './actionTypes';
import saga from './saga';
import reducer from './reducer';
import {connect} from "react-redux";

const mapStateToProps = state => ({
  title:'服务票',
  data:state.InvestmentServiceStock,
  actionTypes
})

const Stock = connect(mapStateToProps)(ServiceStock)

export {Stock,saga,reducer}
