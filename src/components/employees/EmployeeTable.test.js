import React from 'react';
import EmployeeTable from './EmployeeTable';
import { mount } from 'enzyme';

describe('Employee Table Component: ', function () {
	const employees = [{username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true,
                          '_id':1
                         },
                       {username:'jaireina',
                          'email':'jair.reina@slatequarry.com',
                          'firstName':'Jair',
                          'lastName':'Reina',
                          'admin':true,
                          '_id':2
                         }];
		
		const component = mount(
			<EmployeeTable employees={employees} />
		);

  it('should instantiate the Employee Table', function () {

		expect(component).toContainReact(<th>Last Name</th>);
		expect(component).toIncludeText('Flintstone');
  });

  it('should have the same amount of rows as employees ('+employees.length+')', ()=>{
  	expect(component.find('tbody tr')).toHaveLength(employees.length);
  });

});
