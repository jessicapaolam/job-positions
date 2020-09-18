import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
import { Form, Input, Button, Row, Col } from 'antd';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

import { Container, Content, SearchBox, SearchResults } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface PositionListComponentProps {
	routePath: string;
	buttonText: string;
}

const PositionListComponent: React.FC<PositionListComponentProps> = ({ 
		routePath, 
		buttonText 
	}) => {

	const history = useHistory();

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
					<p className="search-title">Vagas de emprego: react</p>

					<div className="results">
					  <div className="position">
					  	<div onClick={() => history.push("/position-detail")} className="position-body">
						  	<p className="position-title">Desenvolvedor React.js Júnior (Remoto)</p>
						  	<p className="company-name">Plus-IT Consulting</p>
						  	<p className="company-location">Valinhos, SP - Home office</p>
						  	<p className="position-description">Esta é uma vaga de um cliente da GeekHunter, candidate-se para ter acesso as informações completas sobre a empresa.</p>
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

					  {/* <div className="position">
					  	<div onClick={() => alert('aqui')} className="position-body">
						  	<p className="position-title">Desenvolvedor React.js Júnior (Remoto)</p>
						  	<p className="company-name">Plus-IT Consulting</p>
						  	<p className="company-location">Valinhos, SP - Home office</p>
						  	<p className="position-description">Esta é uma vaga de um cliente da GeekHunter, candidate-se para ter acesso as informações completas sobre a empresa.</p>
					  	</div>

					  	<div className="icon-bar">
					  		<FaPencilAlt />
					  		<FaTrashAlt />
					  	</div>
					  </div>

					  <div className="position">
					  	<div onClick={() => alert('aqui')} className="position-body">
						  	<p className="position-title">Desenvolvedor React.js Júnior (Remoto)</p>
						  	<p className="company-name">Plus-IT Consulting</p>
						  	<p className="company-location">Valinhos, SP - Home office</p>
						  	<p className="position-description">Esta é uma vaga de um cliente da GeekHunter, candidate-se para ter acesso as informações completas sobre a empresa.</p>
					  	</div>

					  	<div className="icon-bar">
					  		<FaPencilAlt />
					  		<FaTrashAlt />
					  	</div>
					  </div>

					  <div className="position">
					  	<div onClick={() => alert('aqui')} className="position-body">
						  	<p className="position-title">Desenvolvedor React.js Júnior (Remoto)</p>
						  	<p className="company-name">Plus-IT Consulting</p>
						  	<p className="company-location">Valinhos, SP - Home office</p>
						  	<p className="position-description">Esta é uma vaga de um cliente da GeekHunter, candidate-se para ter acesso as informações completas sobre a empresa.</p>
					  	</div>

					  	<div className="icon-bar">
					  		<FaPencilAlt />
					  		<FaTrashAlt />
					  	</div>
					  </div> */}

					</div>
				</SearchResults>
			</Content>

			<Footer />
		</Container>
	);
};

export default PositionListComponent;
