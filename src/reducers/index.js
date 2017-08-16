import {combineReducers} from "redux";
import projects from './project-reducer';
import timesheets from './timesheet-reducer';
import employees from './employee-reducer';

const rootReducer = combineReducers({
  projects,
  timesheets,
  employees
});

export default rootReducer;