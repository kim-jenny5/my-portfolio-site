import styled from "styled-components";

export const IntroCont = styled.div`
	grid-area: intro;
	background-color: lightpink;
	display: grid;
	grid-template-columns: inherit;
	grid-column-gap: 1.25rem;
	/* grid-template-rows: 0.25fr 0.5fr 0.25fr; */
	grid-template-rows: auto 1fr auto;
	/* grid-template-rows: 0.5fr 0.75fr 0.5fr; */
	/* grid-template-rows: repeat(3, 1fr); */
	grid-template-areas:
		". . . . . . . . . . . ."
		"container container container container container container container container container container container container"
		". . . . . . . . . . . .";
	align-items: center;
	justify-items: center;
	/* vertical-align: middle; */
`;

export const MainCont = styled.div`
	grid-area: container;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-column-gap: 1.25rem;
	/* grid-template-rows: 5; */
	grid-template-rows: repeat(5, 1fr);
	grid-template-areas:
		". . . . . . img img img img"
		"text text text text text . img img img img"
		"text text text text text . img img img img"
		"text text text text text . img img img img"
		". . . . . . img img img img";
`;

export const TextCont = styled.div`
	/* display: grid;
	grid-template-columns: inherit;
	grid-column-gap: inherit;
	grid-template-rows: inherit; */
	grid-area: text;
	/* grid-column-start: 2; */
	grid-column: 2 / span 7;
	display: grid;
	grid-template-rows: 1fr 0.5fr;
`;

export const Title = styled.div`
	font-family: Corben;
	font-weight: bold;
	font-size: 36px;
`;

export const Subtitle = styled.div`
	font-family: DM Serif Display;
	font-size: 36px;
`;

export const Jenny = styled.img`
	grid-area: img;
	grid-column: -3;
	width: 400px;
`;
