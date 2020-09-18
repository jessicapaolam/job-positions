import React from 'react';

import PositionDeleteComponent from './PositionDeleteComponent';

const PositionDelete: React.FC = () => {
	return (
		<PositionDeleteComponent 
			routePath="/" 
			buttonText="Retornar à lista"
		/>
	);
};

export default PositionDelete;
