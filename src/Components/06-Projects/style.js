import styled from "styled-components";

export const ProjectsCont = styled.div`
	background-color: lightgoldenrodyellow;

	display: flex;
	flex-direction: column;
	row-gap: 40px;
	padding-bottom: 100px;
`;

export const TopCont = styled.div`
	background-color: salmon;

	display: flex;
	column-gap: 10px;
	margin-bottom: 10px;

	@media only screen and (min-width: 320px) {
		flex-direction: column-reverse;

		div + div {
			font-size: 1rem;
		}

		> img {
			align-self: center;
		}
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
		div + div {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 992px) {
		flex-direction: row;

		div + div {
			font-size: 1.25rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		/* div + div {
			font-size: 1.25rem;
		} */
	}
`;

export const Title = styled.div`
	font-family: DM Serif Display;
	/* font-size: 1.75rem !important; */

	@media only screen and (min-width: 320px) {
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.5rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 1.75rem;
	}

	@media only screen and (min-width: 1200px) {
	}
`;

export const BtmCont = styled.div`
	background-color: lightblue;
	display: flex;
	flex-direction: column;
	row-gap: 10px;

	> div:first-child {
		color: #537962;
		font-weight: bold;
	}

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
		padding: 0.5rem 1.125rem 0.5rem 1.125rem;
		font-weight: bold;
		/* border: none; */
	}
`;

export const ImgCont = styled.img`
	border-radius: 5px;
	border: 1px solid #f5f3f6;

	@media only screen and (min-width: 320px) {
	}

	@media only screen and (min-width: 480px) {
		/* height: 200px; */
		/* width: 20%; */
	}

	@media only screen and (min-width: 768px) {
		/* width: 450px; */
		width: 450px;
	}

	@media only screen and (min-width: 992px) {
		width: 425px;
	}

	@media only screen and (min-width: 1200px) {
		width: 450px;
	}
`;