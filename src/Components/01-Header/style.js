import styled from "styled-components";

export const HeaderCont = styled.div`
	position: sticky;
	top: 0;
	/* background-color: white; */
	background: rgba(255, 255, 255, 0.75);
	backdrop-filter: blur(5px);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-items: center;
	justify-content: space-between;
	font-family: DM Serif Display;
	z-index: 2;

	margin: 0;
	padding: 0.5rem 2rem 0.5rem 2rem;
	border-bottom: thin solid #294234;
`;

export const Logo = styled.button`
	font-family: "DM Serif Display";
	cursor: pointer;
	text-decoration: none;
	color: inherit;
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

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
		font-size: 3rem;
	}
`;

const NavBarTemplate = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

// export const NavBar = styled.ul`
export const NavBar = styled(NavBarTemplate)`
	@media only screen and (min-width: 320px) {
		font-size: 1rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.25rem;
		column-gap: 2rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.25rem;
		column-gap: 3rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 1.5rem;
	}
`;

export const MobileHeaderCont = styled.div`
	position: sticky;
	top: 0;
	background: rgba(255, 255, 255, 0.75);
	backdrop-filter: blur(5px);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: space-between;
	font-family: DM Serif Display;

	margin: 0;
	padding: 1rem 2rem 1rem 2rem;
	border-bottom: thin solid #294234;

	.hamburger {
		display: flex;
		align-self: center;
	}
`;

// export const MobileNav = styled.ul`
export const MobileNav = styled(NavBarTemplate)`
	display: none;
	position: absolute;
	top: 80px;
	left: 0;

	background-color: #eae3d7;
	/* background: rgba(255, 255, 255, 0.75); */

	padding: 10px 0 10px 0;
	width: 100vw;

	> div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		@media only screen and (min-width: 320px) {
			font-size: 1.125rem;
		}

		@media only screen and (min-width: 480px) {
			font-size: 1.25rem;
		}
	}
`;
