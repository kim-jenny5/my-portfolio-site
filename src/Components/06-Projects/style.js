import styled from "styled-components";
import ProjectCont from "./ProjectCont";

// export const StyledProjectCont = styled.div`
export const StyledProjectCont = styled(ProjectCont)`
	color: red;
	background-color: lightgoldenrodyellow;

	display: flex;
	flex-direction: column;

	div:first-child {
		font-family: DM Serif Display;
		/* border-bottom: 1px solid #294234; */
	}

	padding-bottom: 100px;
`;

export const EachProjCont = styled.div`
	background-color: salmon;
`;
