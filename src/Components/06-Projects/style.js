import styled from "styled-components";

export const ProjectsCont = styled.div`
	/* color: red; */
	background-color: lightgoldenrodyellow;

	display: flex;
	flex-direction: column;
	row-gap: 40px;

	> div:first-child {
		font-family: DM Serif Display;
		border-bottom: 1px solid #294234;
	}

	padding-bottom: 100px;
`;

export const EachProjCont = styled.div`
	background-color: salmon;
`;

export const TopCont = styled.div`
	display: flex;
	flex-direction: row;
`;

export const BtmCont = styled.div`
	display: flex;
	flex-direction: column;

	> div:last-child {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
	}
`;

export const ImgCont = styled.img`
	width: 200px;
`;
