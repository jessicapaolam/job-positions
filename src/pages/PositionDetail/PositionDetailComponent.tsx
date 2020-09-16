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
			</Content>

			<Footer />
		</Container>
	);
};

export default PositionDetailComponent;
