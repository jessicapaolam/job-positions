import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
import { Form, Input, Button, Row, Col } from 'antd';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

import { Container, Content, SearchBox, SearchResults } from './styles';

import { graphql, useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface PositionListComponentProps {
	routePath: string;
	buttonText: string;
}
  
 const GET_POSITION_LIST = gql`
	query {
		vacancies {
			id
			position
			address
			type
			salary		
		}
	}
 `;

 const NEW_POSITION_LIST = gql`
	mutation CreateVacancieList($newPosition: NewVacancieInput!) {
		createVacancie(input: $newPosition) {
			position
			company
			address
			type
			description
			salary
		}
 	}
 `;

const PositionListComponent: React.FC<PositionListComponentProps> = ({ 
		routePath, 
		buttonText 
	}) => {

	const history = useHistory();

	const { loading, data } = useQuery(GET_POSITION_LIST);
	const [createNew, newPosition] = useMutation(NEW_POSITION_LIST);

	return (
		<Container>
			<Header to={routePath} buttonText={buttonText} />

			<Content>
				<h1><span>Busca de Vagas</span></h1>
				<SearchBox>
					<Form
				layout="vertical"
				>
					<Row gutter={[16, 16]}>
						<Col span={20}>
							<Form.Item label="Cargo, palavra chave ou empresa">
							<Input placeholder="cargo, palavra chave ou empresa" />
							</Form.Item>
						</Col>

						<Col span={4}>
						<Button type="primary">Achar vagas</Button>
						</Col>
						</Row>
				</Form>
				</SearchBox>
				
				<SearchResults>
					<div className="results">								
					{data && data.vacancies.length ? ( data.vacancies.map((vacancies: any) => (
						<div className="position">			
							<div onClick={() => history.push("/position-detail/:vacancies.id")} className="position-body">
								<div key={vacancies.id} >
									<p className="position-title">Cargo: {vacancies.position}</p>
									<p className="company-location">Localização: {vacancies.address}</p>
									<p className="company-name">Empresa: {vacancies.type}</p>
									<p className="position-salary">Salário: {vacancies.salary}.000,00</p>
								</div>
							</div>
							<div className="icon-bar">
								<div onClick={() => history.push("/position-edit")} className="icon">
									<FaPencilAlt />
								</div>
								<div onClick={() => history.push("/position-delete")} className="icon">
									<FaTrashAlt />
								</div>
							</div>
						</div>
						))
						) : (
							<div className="no-data">Não há vagas cadastradas :(</div>
						)}						
					</div>
				</SearchResults>
			</Content>

			<Footer />
		</Container>
	);
};

export default PositionListComponent;
