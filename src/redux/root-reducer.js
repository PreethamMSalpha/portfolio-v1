import { combineReducers } from "redux";

import sidebarReducer from "./theme/sidebar.reducer";

export default combineReducers({
  sidebar: sidebarReducer,
});
