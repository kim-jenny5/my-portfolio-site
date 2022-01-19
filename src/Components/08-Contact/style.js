import styled from "styled-components";

export const ContactCont = styled.div`
	/* padding-bottom: 100px; */

	display: flex;
	flex-direction: column;
	justify-content: center;
	height: calc(100vh - 60px);
`;

export const Jenny = styled.img`
	z-index: 1;
	align-self: center;

	@media only screen and (min-width: 320px) {
		width: 125px;
	}

	@media only screen and (min-width: 480px) {
		width: 150px;
	}

	@media only screen and (min-width: 768px) {
		width: 175px;
	}

	/* @media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	} */
`;

export const SNS = styled.div`
	display: flex;
	flex-direction: row;
	align-self: center;

	a {
		cursor: pointer;
		text-decoration: none;
		color: #537962;
		border: 1px solid #537962;
		border-radius: 50%;

		> svg {
			vertical-align: middle;
			text-align: center;
		}
	}

	a:hover {
		background-color: #537962;

		> svg {
			color: #eae3d7;
		}
	}

	@media only screen and (min-width: 320px) {
		column-gap: 40px;

		a {
			> svg {
				padding: 8px;
				width: 18px;
				height: 18px;
			}
		}
	}

	@media only screen and (min-width: 480px) {
		a {
			> svg {
				width: 20px;
				height: 20px;
			}
		}
	}

	/* @media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	} */
`;

export const ContactCard = styled.div`
	border: 1px solid #eae3d7;
	border-radius: 20px;
	box-shadow: 3px 3px 6px #e0e0e0;
	align-self: center;
	text-align: center;

	display: flex;
	flex-direction: column;

	.bold {
		font-weight: bold;
	}

	@media only screen and (min-width: 320px) {
		width: 275px;
		margin-top: -60px;
		padding-top: 80px;
		padding-bottom: 40px;
		row-gap: 20px;

		.basic-info {
			> div:first-child {
				font-family: DM Serif Display;
				font-size: 1.25rem;
			}
		}

		.job {
			margin: 5px 0 5px 0;
		}
	}

	@media only screen and (min-width: 480px) {
		width: 400px;
		margin-top: -80px;
		padding-top: 100px;

		.basic-info {
			> div:first-child {
				font-size: 1.5rem;
			}
		}

		.job {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
		width: 450px;
		margin-top: -90px;
		padding-top: 125px;
	}

	@media only screen and (min-width: 992px) {
		width: 500px;
		padding-bottom: 50px;
	}

	@media only screen and (min-width: 1200px) {
		width: 600px;

		.basic-info {
			> div:first-child {
				font-size: 1.625rem;
			}
		}
	}

	@media only screen and (min-width: 1201px) {
		width: 500px;
	}
`;
