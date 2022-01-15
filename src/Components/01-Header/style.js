import styled from "styled-components";

export const HeaderCont = styled.div`
	/* background-color: lightgray; */
	/* grid-area: hd; */

	/* display: grid; */
	/* grid-template-columns: inherit;
	grid-template-rows: 1;
	grid-column-gap: 1.25rem;
	grid-template-areas: "logo" "navbar";
	text-align: center;
	font-family: DM Serif Display; */
	display: flex;
	align-items: center;
	justify-items: center;
	justify-content: space-around;
	font-family: DM Serif Display;
	margin-top: 70px;
`;

export const Button = styled.button`
	position: sticky;
	top: 0;

	font-family: "DM Serif Display";
	cursor: pointer;
	background-color: transparent;
	border: none;
	text-align: center;
	padding: 0;

	@media only screen and (min-width: 320px) {
		font-size: 2rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 2.25rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 2.5rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 3rem;
	}
`;

export const NavBar = styled.ul`
	position: sticky;
	top: 0;

	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	column-gap: 3rem;

	@media only screen and (min-width: 320px) {
		font-size: 1rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.25rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.25rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 1.5rem;
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
