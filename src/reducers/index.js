import { combineReducers } from 'redux';
import LibraryRecuder from './LibraryReducer';

export default combineReducers({
    libraries: () => LibraryRecuder
});
