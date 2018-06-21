import {combineReducers} from 'redux';
import {reducer as header} from '../components/Header/index';

const rootReducer = combineReducers({
  header
});

export default rootReducer;
