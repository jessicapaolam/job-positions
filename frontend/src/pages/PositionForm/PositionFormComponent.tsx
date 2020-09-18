import React from 'react';

import { Form, Input, Button, Card, Alert } from 'antd';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 11, span: 20 },
};


const save = values => {
	console.log('Success:', values);
};

const saveFailed = errorInfo => {
	console.log('Failed:', errorInfo);
};

const PositionListComponent: React.FC = () => {
	return (
		<Container>
			<Header to="/" buttonText="Retornar a lista" />

			<Content>
				<h1><span>Criação de nova vaga</span></h1>
				<Card>
					<Form
						{...layout}
						name="basic"
						initialValues={{ remember: true }}
						onFinish={save}
						onFinishFailed={saveFailed}
					>
						<Form.Item
							label="Cargo"
							name="position"
							rules={[{ required: true, message: 'Digite o cargo' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Empresa"
							name="company"
							rules={[{ required: true, message: 'Digite a Empresa' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Localização"
							name="address"
							rules={[{ required: true, message: 'Digite a Localização' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Tipo"
							name="type"
							rules={[{ message: 'Digite o tipo' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Descrição"
							name="description"
							rules={[{ message: 'Digite a descrição' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Salário"
							name="salary"
							rules={[{ message: 'Digite o salário' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								Salvar
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Content>

			<Footer />
		</Container>
	);
};

export default PositionListComponent;
