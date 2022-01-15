import styled from "styled-components";

export const IntroCont = styled.div`
	grid-area: intro;
	background-color: lightpink;
	display: grid;
	grid-template-columns: inherit;
	grid-template-rows: 2;
	grid-column-gap: 1.25rem;
	grid-template-areas:
		"top top top top top top top top top top top top"
		"btm btm btm btm btm btm btm btm btm btm btm btm";
	/* margin: 0 !important; */
`;

export const TopCont = styled.div`
	grid-area: top;
`;

export const BtmCont = styled.div`
	grid-area: btm;
`;
