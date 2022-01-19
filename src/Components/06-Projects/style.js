import styled from "styled-components";

export const ProjectsCont = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	justify-items: center;
	justify-content: center;
	align-self: center;
	padding-top: calc(100vh * 0.15);

	@media only screen and (min-width: 1200px) {
		width: 72rem;
	}
`;

export const TopCont = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 1.25rem;

	@media only screen and (min-width: 320px) {
		flex-direction: column-reverse;

		div + div {
			font-size: 1.125rem;
		}

		> img {
			align-self: center;
		}
	}

	/* @media only screen and (min-width: 480px) {
	} */

	@media only screen and (min-width: 768px) {
		div + div {
			font-size: 1.25rem;
		}
	}

	@media only screen and (min-width: 992px) {
		flex-direction: row;
	}

	/* @media only screen and (min-width: 1200px) {
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
		width: 18.75rem;
	}

	@media only screen and (min-width: 480px) {
		width: 26.5rem;
	}

	@media only screen and (min-width: 768px) {
		width: 28.125rem;
	}

	@media only screen and (min-width: 992px) {
		width: 26.5rem;
	}

	@media only screen and (min-width: 1200px) {
		width: 28.125rem;
	}
`;
