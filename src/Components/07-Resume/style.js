import styled from "styled-components";

export const ResumeCont = styled.div`
	background-color: palevioletred;
	display: flex;
	flex-direction: column;
	/* align-items: flex-start; */
	/* justify-items: center;
	justify-content: center; */
	padding-bottom: 100px;
	row-gap: 1rem;
`;

export const Title = styled.div`
	font-weight: 600;

	@media only screen and (min-width: 320px) {
		/* font-size: 1.25rem; */
		font-size: 1.125rem;
	}

	@media only screen and (min-width: 480px) {
		/* font-size: 1.375rem; */
		font-size: 1.25rem;
		/* margin-top: 1.5rem; */
	}

	@media only screen and (min-width: 768px) {
		/* font-size: 1.5rem; */
	}

	@media only screen and (min-width: 992px) {
		font-size: 1.5rem;
		/* margin-top: 0; */
	}

	@media only screen and (min-width: 1200px) {
	}
`;

export const EducationCont = styled.div`
	display: flex;
	flex-direction: column;

	> div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	/* margin-bottom: 1.5rem; */

	span {
		@media only screen and (min-width: 320px) {
			font-size: 1rem;
		}

		@media only screen and (min-width: 480px) {
			/* font-size: 1rem; */
		}

		@media only screen and (min-width: 768px) {
			font-size: 1.125rem;
		}

		@media only screen and (min-width: 992px) {
			/* font-size: 1.125rem; */
		}

		@media only screen and (min-width: 1200px) {
			/* font-size: 1.125rem; */
		}
	}
`;

export const ExperienceCont = styled.div`
	margin-top: 1rem;
`;
