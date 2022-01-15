import styled from "styled-components";

export const AboutCont = styled.div`
	/* grid-area: about; */
	background-color: lightgreen;
	display: flex;

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
	/* display: flex; */
	/* flex-direction: column; */
	/* background-color: lightblue; */

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
`;

export const AcnhBlob = styled.img`
	/* grid-area: blob; */
`;

export const BtmCont = styled.div`
	/* grid-area: btm;
	display: grid;
	grid-template-columns: inherit;
	grid-column-gap: 1.25rem; */
`;
