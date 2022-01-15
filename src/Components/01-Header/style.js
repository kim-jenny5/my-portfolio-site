import styled from "styled-components";

export const HeaderCont = styled.div`
	/* position: sticky; */
	/* background-color: lightgray; */
	grid-area: hd;
	display: grid;
	grid-template-columns: inherit;
	grid-template-rows: 1;
	grid-column-gap: 1.25rem;
	grid-template-areas: "logo" "navbar";
	text-align: center;
	font-family: DM Serif Display;

	@media only screen and (min-width: 320px) {
		ul {
			grid-column-end: -1;
		}

		div {
			grid-column-end: -1;
		}
	}

	@media only screen and (min-width: 480px) {
		ul {
			grid-column-start: -5;
		}
	}

	@media only screen and (min-width: 768px) {
		ul {
			grid-column-start: -6;
		}
	}

	@media only screen and (min-width: 1200px) {
		ul {
			/* grid-column: 7 / span 6; */
			grid-column-start: -7;
		}
	}
`;

export const Button = styled.button`
	font-family: "DM Serif Display";
	cursor: pointer;
	background-color: transparent;
	border: none;
	text-align: center;
	padding: 0;

	@media only screen and (min-width: 320px) {
		grid-column: 1 / span 2;
		font-size: 2rem;
	}

	@media only screen and (min-width: 480px) {
		grid-column: 1 / span 2;
		font-size: 2.25rem;
	}

	@media only screen and (min-width: 768px) {
		grid-column: 1 / span 3;
		font-size: 2.5rem;
	}

	@media only screen and (min-width: 1200px) {
		grid-column: 1 / span 4;
		font-size: 3rem;
	}
`;

export const NavBar = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	justify-content: space-evenly;
	align-self: center;

	@media only screen and (min-width: 320px) {
		font-size: 1rem;
		flex-direction: column;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.25rem;
		flex-direction: row;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.25rem;
		/* font-size: 1.5rem; */
		flex-direction: row;
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

export const HamburgerMenu = styled.div`
	display: flex;
	align-self: center;
	justify-content: space-evenly;
`;
