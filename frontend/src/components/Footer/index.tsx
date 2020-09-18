import React from 'react';

import { Container } from './styles';

const copyright = '\u00A9';
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
	return (
		<Container>
			{copyright} {currentYear} JobPositions
		</Container>
	);
};

export default Footer;
