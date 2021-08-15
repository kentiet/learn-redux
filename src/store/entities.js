import { combineReducers } from 'redux';
import bugsReducer from './bugs.js';
import projectsReducer from './projects.js';
import userReducer from './users.js';

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: userReducer,
});
