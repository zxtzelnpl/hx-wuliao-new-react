import ServiceStock from 'components/PageStock/PageStock';
import * as actionTypes from './actionTypes';
import saga from './saga';
import reducer from './reducer';
import {connect} from "react-redux";

const title = '营销票';

const mapStateToProps = state => ({
  data:state.InvestmentMarketingStock,
  title,
  actionTypes
})

const Stock = connect(mapStateToProps)(ServiceStock)

export {Stock,saga,reducer,title}
