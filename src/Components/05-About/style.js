import styled from "styled-components";

export const AboutCont = styled.div`
	background-color: lightgreen;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center;
`;

export const TopCont = styled.div`
	background-color: lightblue;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	column-gap: 4rem;
`;

export const AcnhBlob = styled.img`
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

export const TextCont = styled.div`
	display: flex;
	flex-direction: column;
	width: 41rem;

	div:first-child {
		font-family: DM Serif Display;
		font-size: 32px;
		border-bottom: 1px solid #294234;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		row-gap: 15px;
		font-size: 18px;
	}
`;

export const TechStack = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	span {
		div:first-child {
			font-family: DM Serif Display;
		}
	}
`;
