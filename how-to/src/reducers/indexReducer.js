import { combineReducers } from "redux";
import { guidesReducer as guides } from "./guidesReducer";
import { addGuideReducer as add } from './addGuideReducer';

export default combineReducers({
  guides, 
  add
});