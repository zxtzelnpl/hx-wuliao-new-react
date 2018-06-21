import {combineReducers} from 'redux';
import {reducer as home} from '../routes/Test/index';

const rootReducer = combineReducers({
  home
});

export default rootReducer;
