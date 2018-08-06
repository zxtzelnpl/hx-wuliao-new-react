import {connect} from 'react-redux';
import SiderMenu from './views/SiderMenu';
import reducer from './reducer';
import saga from './saga';
import nameSpace from './nameSpace';

const mapStateToProps = (state) => ({
  router: state.router,
  data: state[nameSpace]
});
const Menu = connect(mapStateToProps)(SiderMenu);

export {
  nameSpace,
  Menu,
  reducer,
  saga,
};
