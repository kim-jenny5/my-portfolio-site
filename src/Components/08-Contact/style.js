import styled from "styled-components";

export const ContactCont = styled.div`
	padding-bottom: 100px;

	display: flex;
	flex-direction: column;
`;

export const Jenny = styled.img`
	width: 175px;
	z-index: 1;
	align-self: center;
`;

export const SNS = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 40px;
	align-self: center;

	a {
		cursor: pointer;
		text-decoration: none;
		color: #537962;
		border: 1px solid #537962;
		border-radius: 50%;

		> svg {
			padding: 8px;
			width: 20px;
			height: 20px;
			vertical-align: middle;
			text-align: center;
		}
	}

	a:hover {
		background-color: #537962;
		opacity: 90%;

		> svg {
			color: #eae3d7;
		}
	}
`;

export const ContactCard = styled.div`
	/* border: 1px solid #f5f3f6; */
	border: 1px solid #eae3d7;
	border-radius: 20px;
	box-shadow: 3px 3px 6px #e0e0e0;
	/* box-shadow: inset 3em 3em #eae3d7; */
	width: 50%;
	align-self: center;
	text-align: center;

	margin-top: -100px;
	padding-top: 125px;
	padding-bottom: 50px;

	display: flex;
	flex-direction: column;
	row-gap: 20px;

	> div {
		/* z-index: -1; */
	}

	.bold {
		font-weight: bold;
	}

	.basic-info {
		> div:first-child {
			font-family: DM Serif Display;
			font-size: 1.75rem;
		}

		> div:last-child {
			font-size: 1.125rem;
		}
	}

	.job {
		margin-top: 5px;
		margin-bottom: 5px;
		font-size: 1.25rem;
	}
`;
