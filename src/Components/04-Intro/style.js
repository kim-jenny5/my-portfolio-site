import styled from "styled-components";

export const IntroCont = styled.div`
	grid-area: intro;
	background-color: lightpink;
	display: grid;
	grid-template-columns: inherit;
	/* grid-template-rows: 5; */
	/* grid-template-areas:
		"top top top top top top top top top top top top"
		"btm btm btm btm btm btm btm btm btm btm btm btm"; */
`;

export const MainCont = styled.div`
	/* grid-area:; */
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-column-gap: 1.25rem;
	grid-template-rows: 5;
	grid-template-areas:
		". . . . . . img img img img"
		"text text text text text . img img img img"
		"text text text text text . img img img img"
		"text text text text text . img img img img"
		". . . . . . img img img img";
`;

export const TextCont = styled.div``;
