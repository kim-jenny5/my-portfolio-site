import styled from "styled-components";

export const ProjectsCont = styled.div`
	/* color: red; */
	background-color: lightgoldenrodyellow;

	display: flex;
	flex-direction: column;
	row-gap: 40px;
	padding-bottom: 100px;

	> div:first-child {
		font-family: DM Serif Display;
		border-bottom: 1px solid #294234;
	}

	@media only screen and (min-width: 320px) {
		> div:first-child {
			font-size: 1.5rem;
		}
	}

	@media only screen and (min-width: 480px) {
		/* > div:first-child {
			font-size: 1.5rem;
		} */
	}

	@media only screen and (min-width: 768px) {
		> div:first-child {
			font-size: 1.75rem;
		}
	}

	@media only screen and (min-width: 992px) {
		/* > div:first-child {
			font-size: 1.75rem;
		} */
	}

	@media only screen and (min-width: 1200px) {
		> div:first-child {
			font-size: 2rem;
		}
	}
`;

export const EachProjCont = styled.div`
	background-color: salmon;
`;

export const TopCont = styled.div`
	display: flex;
	flex-direction: row;
	/* font-size: ; */

	@media only screen and (min-width: 320px) {
		> div > div {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 480px) {
		/* > div > div {
			font-size: 1rem;
		} */
	}

	@media only screen and (min-width: 768px) {
		> div > div {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 992px) {
		/* > div > div {
			font-size: 1rem;
		} */
	}

	@media only screen and (min-width: 1200px) {
		> div > div {
			font-size: 1.25rem;
		}
	}
`;

export const Title = styled.div`
	font-family: DM Serif Display;
	font-size: 1.75rem;
`;

export const BtmCont = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;

	> div:last-child {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
	}

	a {
		text-decoration: none;
		background: #e6b0a4;
		color: #294234;
		cursor: pointer;
		border-radius: 1rem;
		padding: 10px;
		font-weight: bold;
		/* border: none; */
	}
`;

export const ImgCont = styled.img`
	width: 400px;
	border-radius: 5px;
	border: 1px solid #f5f3f6;
`;
