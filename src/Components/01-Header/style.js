import styled from "styled-components";

export const HeaderCont = styled.div`
	/* position: sticky; */
	background-color: lightgray;
	grid-area: hd;
	display: grid;
	grid-template-columns: inherit;
	grid-template-rows: 1;
	grid-column-gap: 1.25rem;
	grid-template-areas: "logo" "navbar";
	text-align: center;
	font-family: DM Serif Display;

	@media only screen and (min-width: 320px) {
		button {
			grid-column: 1 / span 2;
			font-size: 2rem;
		}

		ul {
			grid-column-end: -1;
		}
	}

	@media only screen and (min-width: 1200px) {
		button {
			grid-column: 1 / span 4;
			font-size: 3rem;
		}

		ul {
			grid-column: -7 / span 6;
		}
	}
	/* margin: 0 4.375em 0 4.375em; */
`;

export const Button = styled.button`
	font-family: "DM Serif Display";
	cursor: pointer;
	background-color: transparent;
	border: none;
	text-align: center;
	padding: 0;
`;

export const NavBar = styled.ul`
	/* display: grid; */
	/* grid-column-end: 13; */
	/* grid-column: 8 / 13; */
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: space-evenly;
	/* justify-content: space-between; */
	align-self: center;

	@media only screen and (min-width: 320px) {
		font-size: 1rem;
		flex-direction: column;
		/* font-size: 0.7rem; */
	}

	@media only screen and (min-width: 1200px) {
		font-size: 1.5rem;
		flex-direction: row;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
