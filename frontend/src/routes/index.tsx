import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PositionList from '../pages/PositionList';
import PositionForm from '../pages/PositionForm';
import PositionDetail from '../pages/PositionDetail';
import PositionDelete from '../pages/PositionDelete';
import PositionEdit from '../pages/PositionEdit';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={PositionList} />
		<Route path="/position-form" component={PositionForm} />
		<Route path="/position-detail" component={PositionDetail} />
		<Route path="/position-edit" component={PositionEdit} />
		<Route path="/position-delete" component={PositionDelete} />
	</Switch>
);

export default Routes;
