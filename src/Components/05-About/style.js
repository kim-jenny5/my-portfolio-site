import styled from "styled-components";

export const AboutCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center;
	padding-top: calc(100vh * 0.15);
	padding-bottom: calc(100vh * 0.15);
	width: 100%;
`;

export const TopCont = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;

	@media only screen and (min-width: 320px) {
		flex-direction: column;
		row-gap: 1em;
		margin-bottom: 1.5rem;
	}

	@media only screen and (min-width: 480px) {
		flex-direction: column;
		row-gap: 1em;
		margin-bottom: 2rem;
	}

	@media only screen and (min-width: 768px) {
		flex-direction: column;
		row-gap: 1em;
		margin-bottom: 2.5rem;
	}

	@media only screen and (min-width: 992px) {
		flex-direction: column;
		row-gap: 1em;
		margin-bottom: 3rem;
	}

	@media only screen and (min-width: 1200px) {
		flex-direction: row;
		column-gap: 4rem;
		margin-bottom: 3.5rem;
	}
`;

export const AcnhBlob = styled.img`
	@media only screen and (min-width: 320px) {
		width: 12.5rem;
	}

	@media only screen and (min-width: 480px) {
		width: 15.625rem;
	}

	@media only screen and (min-width: 768px) {
		width: 17rem;
	}

	@media only screen and (min-width: 992px) {
		width: 21.875rem;
	}

	@media only screen and (min-width: 1200px) {
		width: 25rem;
	}
`;

export const TextCont = styled.div`
	display: flex;
	flex-direction: column;

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	@media only screen and (min-width: 480px) {
		ul {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
		ul {
			font-size: 1.25rem;
		}

		width: 40rem;
	}
`;

export const TechStack = styled.div`
	display: flex;
	padding: 2.5rem 0 2.5rem 0;
	background: #f5f3f6;
	border-radius: 30px;

	span {
		div:first-child {
			font-family: DM Serif Display;
		}
	}

	@media only screen and (min-width: 320px) {
		flex-direction: column;
		row-gap: 20px;
		text-align: center;
		width: 100%;

		span {
			div:first-child {
				font-size: 1.25rem;
			}
		}
	}

	@media only screen and (min-width: 480px) {
		width: 450px;

		span {
			div:first-child {
				font-size: 1.25rem;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		text-align: center;
		width: 500px;

		span {
			div:last-child {
				font-size: 1.125rem;
			}
		}
	}

	@media only screen and (min-width: 992px) {
		flex-direction: row;
		justify-content: space-around;
		text-align: start;
		width: 950px;

		span {
			div:first-child {
				font-size: 1.5rem;
			}
		}
	}

	@media only screen and (min-width: 1200px) {
		width: 1150px;
	}
`;
