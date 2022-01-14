import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// import BlobGraphics from "./BlobGraphics";
import HeaderNav from "./HeaderNav";
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
				<HeaderNav />
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

	/* XS / Mobile Portrait */
	@media only screen and (min-width: 320px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 0 20px 0 20px;

		grid-template-areas:
			"hd hd hd hd"
			"content content content content"
			"ft ft ft ft";
	}

	/* S / Mobile Landscape */
	@media only screen and (min-width: 480px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: auto 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 0 32.5px 0 32.5px;

		grid-template-areas:
			"hd hd hd hd hd hd"
			"content content content content content content"
			"ft ft ft ft ft ft";
	}

	/* M / Tablet Portrait */
	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: auto 1fr auto;
		margin: 0 45px 0 45px;

		grid-template-areas:
			"hd hd hd hd hd hd hd hd"
			"content content content content content content content content"
			"ft ft ft ft ft ft ft ft";
	}

	/* L / Tablet Landscape */
	@media only screen and (min-width: 992px) {
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: auto 1fr auto;
		margin: 0 57.5px 0 57.5px;

		grid-template-areas:
			"hd hd hd hd hd hd hd hd hd hd"
			"content content content content content content content content content content"
			"ft ft ft ft ft ft ft ft ft ft";
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
	background-color: lightblue;
	/* padding: 3.9260969976905313vh 0 3.9260969976905313vh 0; */
`;
