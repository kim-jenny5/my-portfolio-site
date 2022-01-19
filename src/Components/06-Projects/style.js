import styled from "styled-components";

export const ProjectsCont = styled.div`
	/* background-color: lightgoldenrodyellow; */

	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	justify-items: center;
	justify-content: center;
	align-self: center;
	padding-top: calc(100vh * 0.15);
	/* padding-bottom: calc(100vh * 0.15); */

	/* height: 100vh; */

	/* @media only screen and (min-width: 320px) {
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	} */

	@media only screen and (min-width: 1201px) {
		width: 85%;
	}
`;

export const TopCont = styled.div`
	/* background-color: salmon; */

	display: flex;
	justify-content: space-between;
	column-gap: 1.25rem;
	/* margin-bottom: 1.5rem; */

	@media only screen and (min-width: 320px) {
		flex-direction: column-reverse;

		div + div {
			font-size: 1.125rem;
			/* font-size: 1rem; */
		}

		> img {
			align-self: center;
		}
	}

	@media only screen and (min-width: 480px) {
		div + div {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
		div + div {
			font-size: 1.25rem;
		}
	}

	@media only screen and (min-width: 992px) {
		flex-direction: row;

		/* div + div {
			font-size: 1.25rem;
		} */
	}

	/* @media only screen and (min-width: 1200px) {
		div + div {
			font-size: 1.25rem;
		}
	} */
`;

export const ProjectName = styled.div`
	font-family: DM Serif Display;
	margin-bottom: 1.25rem;

	@media only screen and (min-width: 320px) {
		font-size: 1.25rem;
		margin-top: 1.5rem;
	}

	@media only screen and (min-width: 480px) {
		font-size: 1.375rem;
		/* margin-top: 1.5rem; */
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.5rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 1.75rem;
		margin-top: 0;
	}

	/* @media only screen and (min-width: 1200px) {
	} */
`;

export const BtmCont = styled.div`
	/* background-color: lightblue; */
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	margin-bottom: 6rem;

	a {
		text-decoration: none;
		background: #e6b0a4;
		color: #294234;
		cursor: pointer;
		border-radius: 1rem;
		padding: 0.5rem 1.125rem 0.5rem 1.125rem;
		font-weight: bold;
	}

	@media only screen and (min-width: 320px) {
		> div:first-child {
			color: #537962;
			font-weight: bold;
			font-size: 0.875rem;
		}

		> div:last-child {
			display: flex;
			flex-direction: row;
			row-gap: 0.75rem;
			column-gap: 1.25rem;
			flex-wrap: wrap;
			font-size: 0.875rem;
		}
	}

	@media only screen and (min-width: 480px) {
		> div:first-child {
			font-size: 1rem;
		}

		> div:last-child {
			font-size: 1rem;
		}
	}

	/* @media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	} */
`;

export const ImgCont = styled.img`
	border-radius: 5px;
	border: 1px solid #f5f3f6;

	@media only screen and (min-width: 320px) {
		width: 300px;
	}

	@media only screen and (min-width: 480px) {
		width: 425px;
	}

	@media only screen and (min-width: 768px) {
		width: 450px;
	}

	@media only screen and (min-width: 992px) {
		width: 425px;
	}

	@media only screen and (min-width: 1200px) {
		width: 450px;
	}
`;
