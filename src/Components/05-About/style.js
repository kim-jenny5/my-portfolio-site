import styled from "styled-components";

export const AboutCont = styled.div`
	/* grid-area: about; */
	background-color: lightgreen;
	display: flex;
	flex-direction: column;

	/* align-items: center;
	justify-items: center;
	justify-content: center; */

	/* flex: 1; */
	/* flex-direction: row; */
	/* flex-direction: column; */
	/* height: 100vh; */

	/* display: grid; */
	/* flex-grow: 1; */

	/* grid-template-rows: 1fr 1fr;
	grid-template-areas:
		"top top top top top top top top top top top top"
		"btm btm btm btm btm btm btm btm btm btm btm btm"; */
`;

export const TopCont = styled.div`
	display: flex;
	flex-direction: column;
	background-color: lightblue;
	/* justify-content: center;
	align-items: center; */
	/* margin: 0 20px 0 20px; */

	/* justify-content: space-around; */

	/* grid-area: top;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-column-gap: 1.25rem;
	grid-template-rows: 4;
	grid-template-areas:
		"blob blob blob title title title title title"
		"blob blob blob text text text text text"
		"blob blob blob text text text text text"
		"blob blob blob text text text text text"; */

	div:first-child {
		font-family: DM Serif Display;
	}

	div:last-child {
		display: flex;
		flex-direction: row;
		/* column-gap: 100px; */
		/* justify-content: center; */

		div {
			display: flex;
			flex-direction: column;
			/* row-gap: 20px; */
			justify-content: space-evenly;
		}
	}
`;

export const AcnhBlob = styled.img`
	/* grid-area: blob; */
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

// export const Title = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-around;
// `;

// export const Languages = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-around;
// `;
