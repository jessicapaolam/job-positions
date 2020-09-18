import React from 'react';

import PositionListComponent from './PositionListComponent';

const PositionList: React.FC = () => {
	return (
		<PositionListComponent 
			routePath="/position-form" 
			buttonText="Criar nova vaga"
		/>
	);
};

export default PositionList;
