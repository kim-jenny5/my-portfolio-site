import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// import BlobGraphics from "./BlobGraphics";
// import HeaderNav from "./HeaderNav";
// import Introduction from "./Introduction";
// import About from "./About";
// import ProjectsCont from "./ProjectsCont";
// import ResumeCont from "./ResumeCont";
// import Contact from "./Contact";
// import Footer from "./Footer";/

export default function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<GridWrapper>
				{/* <BlobGraphics /> */}
				<HeaderCont>
					{/* <HeaderNav /> */}
					Header
				</HeaderCont>
				<Content>
					Content
					{/* <Introduction />
					<About />
					<ProjectsCont />
					<ResumeCont />
					<Contact /> */}
				</Content>
				<Ft>
					{/* <Footer /> */}
					Footer
				</Ft>
			</GridWrapper>
		</div>
	);
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #294234;
    font-family: Source Sans Pro;
  }
  
  ::selection {
    background: #eae3d7
  }
`;

const GridWrapper = styled.div`
	display: grid;
	height: 100vh;

	/* S / Mobile */
	@media only screen and (min-width: 480px) {
		/* grid-template-columns: 1fr; */
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 0 20px 0 20px;

		grid-template-areas:
			"hd hd hd hd"
			"content content content content"
			"ft ft ft ft";
	}

	/* M / Tablet Portrait */
	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 0 40px 0 40px;

		grid-template-areas:
			"hd hd hd hd hd hd"
			"content content content content content content"
			"ft ft ft ft ft ft";
	}

	/* L / Tablet Landscape */
	@media only screen and (min-width: 992px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: auto 1fr auto;
		margin: 0 60px 0 60px;

		grid-template-areas:
			"hd hd hd hd hd hd hd hd"
			"content content content content content content content content"
			"ft ft ft ft ft ft ft ft";
	}

	/* XL / Desktop */
	@media only screen and (min-width: 1200px) {
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 0 70px 0 70px;

		grid-template-areas:
			"hd hd hd hd hd hd hd hd hd hd hd hd"
			"content content content content content content content content content content content content"
			"ft ft ft ft ft ft ft ft ft ft ft ft";
	}
`;

export const HeaderCont = styled.div`
	/* position: sticky; */
	/* width: 100vw; */
	/* grid-column-start: 2; */
	/* display: grid; */
	/* grid-row: 1; */
	/* grid-template-columns: repeat(12, 1fr); */
	/* grid-template-columns: repeat(, 1fr); */
	/* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */

	/* grid-column-gap: 1.25rem; */
	background-color: lightgray;
	/* font-family: DM Serif Display; */
	grid-area: hd;
	/* margin: 0 4.375em 0 4.375em; */
`;

// export const Content = styled(Section)`
export const Content = styled.div`
	grid-area: content;
	/* grid-row: 2;
	overflow: auto; */
	background-color: lightpink;
	/* width: 100vw; */
`;

export const Ft = styled.div`
	grid-area: ft;
	/* grid-row: 3;
	grid-template-columns: 1;
	font-size: 0.75em;
	background: #eae3d7;
	text-align: center;
	padding: 2.125em 0 2.125em 0; */
	background-color: lightgreen;
	/* padding: 3.9260969976905313vh 0 3.9260969976905313vh 0; */
`;
