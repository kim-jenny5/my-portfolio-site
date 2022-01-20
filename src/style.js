import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #294234;
    font-family: Source Sans Pro;
    position: relative;
    font-size: 100%;
    min-height: 100vh;
  }
  
  ::selection {
    background: #eae3d7
  }
  
  .section-title {
    font-family: DM Serif Display;
	border-bottom: 1px solid #294234;

	@media only screen and (min-width: 320px) {
		font-size: 1.5rem;
	}

	/* @media only screen and (min-width: 480px) {
	} */

	@media only screen and (min-width: 768px) {
		font-size: 1.75rem;
	}

	/* @media only screen and (min-width: 992px) {
	} */

	@media only screen and (min-width: 1200px) {
		font-size: 2rem;
	}
  }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 100vh;

	/* row-gap: 100px; */

	/* XS / Mobile Portrait */
	@media only screen and (min-width: 320px) {
		/* margin: 1.25rem 1.25rem 0 1.25rem; */
		margin: 0 1.25rem 0 1.25rem;
	}

	/* S / Mobile Landscape */
	@media only screen and (min-width: 480px) {
		/* margin: 2.031rem 2.031rem 0 2.031rem; */
		margin: 0 2.031rem 0 2.031rem;
	}

	/* M / Tablet Portrait */
	@media only screen and (min-width: 768px) {
		/* margin: 2.813rem 2.813rem 0 2.813rem; */
		margin: 0 2.813rem 0 2.813rem;
	}

	/* L / Tablet Landscape */
	@media only screen and (min-width: 992px) {
		/* margin: 3.594rem 3.594rem 0 3.594rem; */
		margin: 0 3.594rem 0 3.594rem;
	}

	/* XL / Desktop */
	@media only screen and (min-width: 1200px) {
		/* margin: 4.375rem 4.375rem 0 4.375rem; */
		margin: 0 4.375rem 0 4.375rem;
	}
`;