import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
	padding: 10px 0;
	background: #E5E6E7;
	-webkit-box-shadow: 0 4px 4px -2px #999591;
  -moz-box-shadow: 0 4px 4px -2px #999591;
  box-shadow: 0 4px 4px -2px #999591;
`;

export const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	max-width: 1120px;
	width: 1120px;
	margin: 0 auto;

	> img {
		height: 50px;
	}

	.action-button {
		margin-left: auto;
	}
`;
