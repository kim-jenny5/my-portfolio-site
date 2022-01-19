import styled from "styled-components";

export const ContactCont = styled.div`
	/* background-color: lightsteelblue; */
	padding-bottom: 100px;
	/* z-index: -2; */

	display: flex;
	flex-direction: column;
`;

// export const TextCont = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	/* font-size: 1.125rem; */
// 	font-size: 1.25rem;

// 	> div:first-child {
// 	}
// `;

export const Jenny = styled.img`
	width: 200px;
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
	border-radius: 15px;
	box-shadow: 3px 3px 6px #e0e0e0;
	/* box-shadow: inset 3em 3em #eae3d7; */
	width: 40%;
	align-self: center;
	text-align: center;

	margin-top: -100px;
	padding-top: 125px;
	padding-bottom: 30px;

	display: flex;
	flex-direction: column;
	row-gap: 20px;

	> div {
		/* z-index: -1; */
	}

	.bold {
		font-weight: bold;
	}
`;
