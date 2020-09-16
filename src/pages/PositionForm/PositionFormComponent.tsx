import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PositionListComponent: React.FC = () => {
	return (
		<Container>
			<Header to="/" buttonText="Retornar a lista" />

			<Content>
				<h1><span>Criação de nova vaga</span></h1>
			</Content>

			<Footer />
		</Container>
	);
};

export default PositionListComponent;
