import React, { Component } from 'react';
import Project from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';

import {BrowseRouter, Route, Switch, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
  	return (
  		<BrowseRouter>
  			<div clasName="App">
  				<Switch>
  					<Route path="/projects" component={Projects} />
  					<Route exact path="/employees" component={Employees} />
  					<Route path="/employees/:user_id/timesheets" components={Timesheets} />
  					<Redirect to="/employees" />
  				</Switch>
  			</div>
  		</BrowseRouter>
  	);
  }
}

export default App;
