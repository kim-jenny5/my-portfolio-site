import styled from "styled-components";

export const HeaderCont = styled.div`
	/* position: sticky; */
	/* width: 100vw; */
	/* grid-column-start: 2; */
	/* display: grid; */
	/* grid-row: 1; */
	/* grid-template-columns: repeat(12, 1fr); */
	/* grid-template-columns: repeat(, 1fr); */
	/* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */

	/* grid-column-gap: 1.25rem; */
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
			/* > div:first-child { */
			grid-column: 1 / span 2;
			font-size: 2rem;
		}

		> div:last-child {
			grid-column-end: -1;
		}
	}

	@media only screen and (min-width: 1200px) {
		button {
			/* > div:first-child { */
			/* grid-column: 1 / span 4; */
			grid-column: 1 / span 4;
			font-size: 3rem;
		}

		> div:last-child {
			grid-column: -7 / span 6;
		}
	}
	/* margin: 0 4.375em 0 4.375em; */
`;

export const Button = styled.button`
	/* grid-column: 1 / 4; */
	font-family: "DM Serif Display";
	/* font-size: 3em; */
	background-color: transparent;
	border: none;
	text-align: center;
	padding: 0;
`;

export const NavBar = styled.ul`
	display: grid;
	/* grid-column-end: 13; */
	/* grid-column: 8 / 13; */
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 1.375em;
	text-align: center;
	grid-row: 1;
	> li {
		/* grid-template-columns: repeat(4, 1fr); */
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		/* grid-row: 1; */
		padding: 1.125em 0 1.125em 0;
		> a {
			/* grid-column-start: 1; */
			text-decoration: none;
			color: #294234;
		}
	}
`;
