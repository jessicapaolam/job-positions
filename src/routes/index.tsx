import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PositionList from '../pages/PositionList';
import PositionForm from '../pages/PositionForm';
import PositionDetail from '../pages/PositionDetail';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={PositionList} />
		<Route path="/position-form" component={PositionForm} />
		<Route path="/position-detail" component={PositionDetail} />
	</Switch>
);

export default Routes;
