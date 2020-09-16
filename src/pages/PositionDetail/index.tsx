import React from 'react';

import PositionDetailComponent from './PositionDetailComponent';

const PositionDetail: React.FC = () => {
	return (
		<PositionDetailComponent 
			routePath="/" 
			buttonText="Retornar à lista"
		/>
	);
};

export default PositionDetail;
