import styled from "styled-components";

export const IntroCont = styled.div`
	grid-area: intro;
	/* background-color: lightpink; */
	display: flex;
	/* display: grid; */
	/* grid-template-columns: inherit; */
	/* grid-column-gap: 1.25rem; */
	/* grid-template-rows: auto 1fr auto;
	grid-template-areas:
		". . . . . . . . . . . ."
		"container container container container container container container container container container container container"
		". . . . . . . . . . . ."; */
	align-items: center;
	justify-items: center;
	justify-content: center;
`;

export const MainCont = styled.div`
	grid-area: container;
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 8.5rem;
`;

export const Title = styled.div`
	font-family: Corben;
	font-weight: bold;
	font-size: 36px;
`;

export const Subtitle = styled.div`
	font-family: DM Serif Display;
	font-size: 36px;
	margin-top: 1.25rem;

	span {
		color: #537962;
	}
`;

export const Jenny = styled.img`
	width: 400px;
`;
