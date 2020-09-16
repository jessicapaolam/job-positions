import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderContent } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
	to: string;
	buttonText: string;
}

const Header: React.FC<HeaderProps> = ({ to, buttonText }) => {
	return (
		<Container>
			<HeaderContent>
				<img src={logoImg} alt="JobPositions" />

				<Link to={to} className="fake-button action-button">{buttonText}</Link>
			</HeaderContent>
		</Container>
	);
};

export default Header;
