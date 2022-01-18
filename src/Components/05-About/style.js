import styled from "styled-components";

export const AboutCont = styled.div`
	background-color: lightgreen;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center;
	/* padding-bottom: 100px; */
`;

export const TopCont = styled.div`
	/* background-color: lightblue; */
	display: flex;
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
		width: 200px;
	}

	@media only screen and (min-width: 480px) {
		width: 250px;
	}

	@media only screen and (min-width: 768px) {
		width: 275px;
	}

	@media only screen and (min-width: 992px) {
		width: 350px;
	}

	@media only screen and (min-width: 1200px) {
		width: 400px;
	}
`;

export const TextCont = styled.div`
	display: flex;
	flex-direction: column;

	div:first-child {
		font-family: DM Serif Display;
		border-bottom: 1px solid #294234;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	@media only screen and (min-width: 320px) {
		div:first-child {
			font-size: 1.5rem;
		}

		ul {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 480px) {
		div:first-child {
			font-size: 1.5rem;
		}

		ul {
			font-size: 1rem;
		}

		width: 30rem;
	}

	@media only screen and (min-width: 768px) {
		div:first-child {
			font-size: 1.75rem;
		}

		ul {
			font-size: 1.125rem;
		}

		width: 40rem;
	}

	@media only screen and (min-width: 992px) {
		div:first-child {
			font-size: 1.75rem;
		}

		ul {
			font-size: 1.125rem;
		}

		width: 45rem;
	}

	@media only screen and (min-width: 1200px) {
		div:first-child {
			font-size: 2rem;
		}

		ul {
			font-size: 1.125rem;
		}

		width: 40rem;
	}
`;

export const TechStack = styled.div`
	display: flex;
	padding: 2.5rem 0 2.5rem 0;
	width: 90%;
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
		width: 80%;

		span {
			div:first-child {
				font-size: 1.25rem;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		text-align: center;
		padding: 2.5rem 2rem 2.5rem 2rem;
		width: 65%;

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
		width: 90%;

		span {
			div:first-child {
				font-size: 1.5rem;
			}
		}
	}

	@media only screen and (min-width: 1200px) {
		width: 80%;
	}

	@media only screen and (min-width: 1201px) {
		width: 70%;
	}
`;
