import VideoMaterialList from 'components/Material/VideoMaterialList';
import SubMenuLinkForProduct from 'components/SiderMenu/SubMenuLinkForProduct';
import {connect} from 'react-redux';
import {title,path} from './constant';
import * as actionTypes from './actionTypes';
import nameSpace from './nameSpace';
import reducer from './reducer';
import saga from './saga';
import * as service from './service';


const mapStateToProps = {
  List: state => ({
    data: state[nameSpace],
    title,
    actionTypes
  }),
  ComprehensiveLink: state => ({
    total: state[nameSpace].total,
    beforeTotal: state[nameSpace].beforeTotal,
    router:state.router,
    title,
    path,
    actionTypes
  }),
}

const List = connect(mapStateToProps.List)(VideoMaterialList);
const ComprehensiveLink = connect(mapStateToProps.ComprehensiveLink)(SubMenuLinkForProduct);

export {
  nameSpace,
  reducer,
  saga,
  service,
  title,
  path,
  List,
  ComprehensiveLink,
}
