import styled from "styled-components";

export const IntroCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center;
	height: calc(100vh - 150px);

	a {
		text-decoration: none;
		color: inherit;

		> .arrow {
			text-decoration: none;

			width: 40px;
			height: 40px;
			top: 100vh;
			transform: translateY(200%);
			z-index: -1;
		}
	}
`;

export const MainCont = styled.div`
	display: flex;
	align-items: center;

	@media only screen and (min-width: 320px) {
		flex-direction: column-reverse;
		row-gap: 1.25rem;
		text-align: center;

		> div {
			width: 100vw;
		}
	}

	@media only screen and (min-width: 480px) {
		flex-direction: column-reverse;
		row-gap: 1.25rem;
		text-align: center;
	}

	@media only screen and (min-width: 768px) {
		flex-direction: column-reverse;
		row-gap: 1.25rem;
		text-align: center;

		> div {
			width: 40.5rem;
		}
	}

	@media only screen and (min-width: 992px) {
		flex-direction: row;
		width: 100%;
		text-align: start;
		justify-content: space-around;
	}

	@media only screen and (min-width: 1200px) {
		justify-content: space-evenly;
		width: 85%;
	}
`;

export const Title = styled.div`
	font-family: DM Serif Display;

	@media only screen and (min-width: 320px) {
		font-size: 1.75rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 2rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 2.5rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 2.75rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 3rem;
	}
`;

export const Subtitle = styled.div`
	font-family: Source Code Pro;

	span {
		color: #537962;
	}

	@media only screen and (min-width: 320px) {
		font-size: 1.125rem;
		margin-top: 1rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.5rem;
		margin-top: 1rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.75rem;
		margin-top: 1rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 1.875rem;
		margin-top: 1.25rem;
	}

	@media only screen and (min-width: 1200px) {
		font-size: 2.25rem;
		margin-top: 1.25rem;
	}
`;

export const Jenny = styled.img`
	@media only screen and (min-width: 320px) {
		width: 11rem;
	}

	@media only screen and (min-width: 480px) {
		width: 15.625rem;
	}

	@media only screen and (min-width: 768px) {
		width: 17rem;
	}

	@media only screen and (min-width: 992px) {
		width: 21.875rem;
	}

	@media only screen and (min-width: 1200px) {
		width: 25rem;
	}
`;
