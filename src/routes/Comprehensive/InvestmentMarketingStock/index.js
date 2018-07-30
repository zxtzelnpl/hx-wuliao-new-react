import ServiceStock from 'components/PageStock/PageStock';
import * as actionTypes from './actionTypes';
import saga from './saga';
import reducer from './reducer';
import {connect} from "react-redux";

const mapStateToProps = state => ({
  title:'营销票',
  data:state.InvestmentMarketingStock,
  actionTypes
})

const Stock = connect(mapStateToProps)(ServiceStock)

export {Stock,saga,reducer}
