import * as EmployeeActionTypes from '../actions/EmployeeActionTypes';

let employeeReducer = (state = {employees: [], employee:{}}, action) => {

	switch(action.type) {
		
		case EmployeeActionTypes.LIST:
			return Object.assign({}, state, {employees: action.employees });

		case EmployeeActionTypes.GET:
			return Object.assign({}, state, {employee: action.employee });

		default:
			return state;
	}
}

export default employeeReducer