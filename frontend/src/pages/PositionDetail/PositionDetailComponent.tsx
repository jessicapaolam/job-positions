import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
import { Form, Input, Button, Row, Col } from 'antd';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface PositionDetailComponentProps {
	routePath: string;
	buttonText: string;
}

const PositionDetailComponent: React.FC<PositionDetailComponentProps> = ({ 
		routePath, 
		buttonText
	}) => {

	const history = useHistory();

	return (
		<Container>
			<Header to={routePath} buttonText={buttonText} />

			<Content>
				<h1><span>Detalhe da Vaga</span></h1>
					<div>
						<span>Cargo:</span><span>Desenvolvedor</span><br/>
						<span>Empresa:</span><span>Empresa Teste</span><br/>		
						<span>Endereço:</span><span>Ponta Grossa - PR</span><br/>				
						<span>Tipo:</span><span>Remoto</span><br/>				
						<span>Descrição:</span><span>Atuar no desenvolvimento de sistemas</span><br/>				
						<span>Salário:</span><span>R$8.000,00</span><br/>				
					</div>
			</Content>

			<Footer />
		</Container>
	);
};

export default PositionDetailComponent;
