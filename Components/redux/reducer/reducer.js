import {combineReducers} from 'redux';
import arrWordsReducer from './arrWordsReducer';
import fillterStatusReducer from './fillterStatusReducer';
import isAddingReducer from './isAddingReducer';

const reducer = combineReducers({
  arrWords: arrWordsReducer,
  fillterStatus: fillterStatusReducer,
  isAdding: isAddingReducer
});

export default reducer;
