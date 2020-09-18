import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.main`
	max-width: 1120px;
	margin: 90px auto 40px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.container-detail {
		flex: 1 0 400px;
		min-width: 350px;
		max-width: 900px;
		width: 900px;
		height: 195px;
		border: 2px solid #D4D2D0;
	  	border-radius: 4px;
	 	background: #fff;
	  	color: #171e42;
	  	padding: 10px 15px 10px 15px;
		margin-left: 20px;
		margin-top: 20px;

	}
`;
