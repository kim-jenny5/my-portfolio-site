import styled from "styled-components";

export const IntroCont = styled.div`
	background-color: lightpink;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center;
`;

export const MainCont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (min-width: 320px) {
		flex-direction: column-reverse;
		row-gap: 1.25rem;
		text-align: center;
	}

	@media only screen and (min-width: 480px) {
		flex-direction: column-reverse;
		row-gap: 1.25rem;
		text-align: center;
	}

	@media only screen and (min-width: 768px) {
		flex-direction: column-reverse;
		row-gap: 1.25rem;
		text-align: center;
	}

	@media only screen and (min-width: 992px) {
		flex-direction: row;
		column-gap: 7.5rem;
		text-align: start;
	}

	@media only screen and (min-width: 1200px) {
		flex-direction: row;
		column-gap: 8.5rem;
		text-align: start;
	}
`;

export const Title = styled.div`
	font-family: Corben;
	font-weight: bold;

	@media only screen and (min-width: 320px) {
		font-size: 1.22rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.5rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.875rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 1.75rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 2.25rem;
	}
`;

export const Subtitle = styled.div`
	font-family: DM Serif Display;

	span {
		color: #537962;
	}

	@media only screen and (min-width: 320px) {
		font-size: 1.3rem;
		margin-top: 1rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.5rem;
		margin-top: 1rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.75rem;
		margin-top: 1rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 1.875rem;
		margin-top: 1.25rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 2.25rem;
		margin-top: 1.25rem;
	}
`;

export const Jenny = styled.img`
	@media only screen and (min-width: 320px) {
		width: 175px;
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
