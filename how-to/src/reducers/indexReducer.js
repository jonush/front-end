import { combineReducers } from "redux";
import { guidesReducer as guides } from "./guidesReducer";
import { addGuideReducer as add } from './addGuideReducer';
import { commentsReducer as comments} from './commentsReducer';

export default combineReducers({
  guides, 
  add,
  comments
});