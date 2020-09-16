import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.main`
	max-width: 1120px;
	margin: 90px auto 40px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const SearchBox = styled.div`
	width: 100%;

	Input {
		padding: 8px;
	}

	Button{
		height: 40px;
		margin-top: 30px;
		padding: 0 25px;
	} 

	Form {
		width: 50%;
		margin: 0;
	}
`;

export const SearchResults = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1100px;
	margin: -10px auto;
	width: 100%;

	.search-title {
		margin-bottom: 10px;
		margin-left: -8px;
	}

	.results {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-left: -30px;
		margin-top: -20px;
	}

	.results .position {
		flex: 1 0 400px;
		min-width: 350px;
		max-width: 350px;
		width: 350px;
		height: 195px;
		border: 2px solid #D4D2D0;
	  border-radius: 4px;
	  background: #fff;
	  color: #171e42;
	  padding: 10px 15px 10px 15px;
		margin-left: 20px;
		margin-top: 20px;

		.position-title {
			font-weight: 500;
			margin-bottom: 0;
		}

		.company-name {
			line-height: 20px;
			margin-bottom: 0;
		}

		.company-location {
			line-height: 20px;
			margin-bottom: 0;
		}

		.position-description {
			margin-top: 15px;
			line-height: 20px;
			font-size: 90%;
		}

		.position-body {
			cursor: pointer;	
		}

		.icon-bar {
			display: flex;
			justify-content: flex-end;
			margin-right: -15px;

			svg {
				margin-right: 10px;
			}
		}
	}

	@media (min-width: 410px) {
	  .results .position {
	    max-width: calc(100%);
	  }
	}

	@media (min-width: 620px) {
	  .results .position {
	    max-width: calc(66% - 10px);
	  }
	}

	@media (min-width: 830px) {
	  .results .position {
	    max-width: calc(50% - 10px);
	  }
	}

	@media (min-width: 1040px) {
	  .results .position {
	    max-width: calc(40% - 10px);
	  }
	}

	@media (min-width: 1250px) {
	  .results .position {
	    max-width: calc(32% - 10px);
	  }
	}

	@media (min-width: 1460px) {
	  .results .position {
	    max-width: calc(28% - 10px);
	  }
	}

	@media (min-width: 1670px) {
	  .results .position {
	    min-width: calc(25% - 10px);
	  }
	}
`;
