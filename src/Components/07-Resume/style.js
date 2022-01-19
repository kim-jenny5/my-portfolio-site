import styled from "styled-components";

export const ResumeCont = styled.div`
	/* background-color: palevioletred; */
	display: flex;
	flex-direction: column;
	justify-items: center;
	justify-content: center;
	align-self: center;
	padding-bottom: 100px;

	row-gap: 1rem;

	.dates {
		text-align: end;
	}

	@media only screen and (min-width: 320px) {
		width: 100%;
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}

	@media only screen and (min-width: 1201px) {
		width: 80%;
	}
`;

export const Title = styled.div`
	font-family: DM Serif Display;

	@media only screen and (min-width: 320px) {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		/* font-size: 1.125rem; */
	}

	@media only screen and (min-width: 480px) {
		/* font-size: 1.375rem; */
		/* font-size: 1.25rem; */
		/* margin-top: 1.5rem; */
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.375rem;
	}

	@media only screen and (min-width: 992px) {
		/* font-size: 1.375rem; */
		/* margin-top: 0; */
	}

	@media only screen and (min-width: 1200px) {
		font-size: 1.5rem;
	}
`;

export const EducationCont = styled.div`
	/* display: flex;
	flex-direction: column; */

	/* > div:first-child {
		margin-bottom: 0.5rem;
	} */

	@media only screen and (min-width: 320px) {
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}
`;

export const ExperienceCont = styled.div`
	/* display: flex;
	flex-direction: column; */
	/* justify-content: space-between; */

	> div:first-child {
		/* margin-bottom: 0.5rem; */
	}

	> div:nth-child(3) {
		/* column-gap: 3rem; */
	}

	ul {
		/* margin-top: 0.5rem; */
		/* margin: 0.5rem 0 1rem 0; */
	}
	@media only screen and (min-width: 320px) {
		/* > div:nth-child(3),
		> div:nth-child(7) {
			flex-direction: row;
			justify-content: space-between;
		} */
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}
`;

export const EachEducation = styled.div`
	@media only screen and (min-width: 320px) {
		margin-bottom: 1rem;

		.city-dates {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}

	@media only screen and (min-width: 480px) {
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}
`;

export const EachExperience = styled.div`
	@media only screen and (min-width: 320px) {
		.city-dates {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		ul {
			padding-left: 8%;
		}
	}

	@media only screen and (min-width: 480px) {
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 1.125rem;
		}

		ul {
			padding-left: 5%;
		}
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}
`;
