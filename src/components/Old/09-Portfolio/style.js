import styled from "styled-components";

export const PortfolioCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: -30px;
`;

export const SemiCircle = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	background-color: #f5f3f6;
	text-align: center;
	align-items: center;
	row-gap: 10px;
	width: 300px;
	height: 150px;
	border-radius: 150px 150px 0px 0px;

	> div:first-child {
		margin-top: 65px;
		align-items: center;

		> span {
			display: flex;
			flex-direction: row;
			column-gap: 10px;

			> a {
				color: inherit;
			}
		}
	}

	> div:last-child {
		font-family: DM Serif Display;
		font-style: italic;
	}
`;

export const TextCont = styled.div``;
