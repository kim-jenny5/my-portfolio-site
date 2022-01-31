import styled from "styled-components";

export const PortfolioCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: -30px;
`;

export const SemiCircle = styled.div`
	align-self: center;
	width: 300px;
	height: 150px;
	background-color: lightgray;
	border-radius: 150px 150px 0px 0px;
	text-align: center;
	align-items: center;
	/* row-gap: 20px; */

	> div:first-child {
		margin-top: 50px;
	}

	> div:last-child {
		display: flex;
		flex-direction: row;

		/* justify-content: center; */
		justify-content: space-evenly;
		/* column-gap: 5px; */
	}
`;

export const TextCont = styled.div``;
