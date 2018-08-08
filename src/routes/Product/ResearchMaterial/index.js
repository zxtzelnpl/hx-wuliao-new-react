import Research from './views/Research';
import SubLinkForProduct from 'components/SiderMenu/SubLinkForProduct';
import {title,path} from './constant';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';
import * as actionTypes from "../CustomerServiceVideo/actionTypes";
import {connect} from "react-redux";

const mapStateToProps = {
  ComprehensiveLink: state => ({
    team: state[nameSpace].team,
    child: state[nameSpace].child,
    total: state[nameSpace].total,
    beforeTotal: state[nameSpace].beforeTotal,
    router:state.router,
    title,
    path,
    actionTypes
  }),
}

const ComprehensiveLink = connect(mapStateToProps.ComprehensiveLink)(SubLinkForProduct);

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  Research,
  ComprehensiveLink,
}
