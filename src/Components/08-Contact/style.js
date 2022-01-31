import styled from "styled-components";

export const ContactCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: calc(100vh - 3.75rem);
`;

export const Jenny = styled.img`
	z-index: 1;
	align-self: center;

	@media only screen and (min-width: 320px) {
		width: 8rem;
	}

	@media only screen and (min-width: 480px) {
		width: 9.375rem;
	}

	@media only screen and (min-width: 768px) {
		width: 11rem;
	}
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
		column-gap: 2.5rem;

		a {
			> svg {
				padding: 0.5rem;
				width: 1.125rem;
				height: 1.125rem;
			}
		}
	}

	@media only screen and (min-width: 480px) {
		a {
			> svg {
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	}
`;

// export const DownloadBtn = styled.a`
// 	background: #988671;
// 	border-radius: 1.875rem;
// 	text-decoration: none;
// 	text-align: center;
// 	width: fit-content;
// 	font-weight: bold;
// 	letter-spacing: 0.5px;
// 	color: #f5f3f6;
// 	align-self: center;
// 	padding: 0.5rem 1.375rem 0.5rem 1.375rem;
// `;

export const ContactCard = styled.div`
	border: 1px solid #f5f3f6;
	border-radius: 10px;
	box-shadow: 2px 2px 10px #e0e0e0;
	align-self: center;
	text-align: center;

	display: flex;
	flex-direction: column;

	.bold {
		font-weight: bold;
	}

	@media only screen and (min-width: 320px) {
		width: 17rem;
		margin-top: -3.75rem;
		padding-top: 5rem;
		padding-bottom: 3.75rem;
		row-gap: 1.25rem;

		.basic-info {
			> div:first-child {
				font-family: DM Serif Display;
				font-size: 1.25rem;
			}
		}

		.job {
			margin: 0.25rem 0 0.25rem 0;
		}
	}

	@media only screen and (min-width: 480px) {
		width: 25rem;
		margin-top: -5rem;
		padding-top: 6.25rem;

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
		width: 28.125rem;
		margin-top: -5.625rem;
		padding-top: 7.75rem;
	}

	@media only screen and (min-width: 992px) {
		width: 31.25rem;
		padding-bottom: 3.125rem;
	}

	@media only screen and (min-width: 1200px) {
		width: 35rem;

		.basic-info {
			> div:first-child {
				font-size: 1.625rem;
			}
		}
	}
`;
