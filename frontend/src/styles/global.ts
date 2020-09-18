import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: #fff;
		color: #000;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Roboto Slab', serif;
		font-size: 16px;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
	}

	h1 span {
		position: relative;
		padding-left: 13px;

		&::after {
			position: absolute;
			height: 55%;
			width: 8px;
			left: 0;
			top: 27%;
			content: '';
			background: #F4C325;
		}
	}

	button: {
		cursor: pointer;
	}

	.fake-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #002A6F;
		height: 40px;
		border-radius: 6px;
		border: 0;
		padding: 0 10px;
		color: #fff;
		width: 200px;
		font-weight: 500;
		margin-top: 0;
		transition: background-color 0.2s;
		text-decoration: none;

		&:hover {
			background: ${shade(0.2, '#002A6F')};
			color: #fff;
		}

		&:active {
			transform: translateY(1px);
		}
	}

	.ant-input {
		border-radius: 4px;
	 	border-color: #002A6F;
	  outline: 0;
	}

	.ant-btn-primary {
		border-radius: 4px;
	 	border-color: #002A6F;
		background-color: #002A6F;

		&:hover, &:focus {
			border-radius: 4px;
	 		border-color: #002A6F;
			background: ${shade(0.2, '#002A6F')};
		}

		&:active {
			transform: translateY(2px);
		}
	}
`;
