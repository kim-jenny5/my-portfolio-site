import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// import BlobGraphics from "./BlobGraphics";
import Header from "./Components/01-Header/Header";
import Footer from "./Components/02-Footer/Footer";
import { Blob1, Blob2 } from "./Components/03-Blobs/Blobs";
// import Introduction from "./Introduction";
// import About from "./About";
// import ProjectsCont from "./ProjectsCont";
// import ResumeCont from "./ResumeCont";
// import Contact from "./Contact";

export default function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <Blob1 /> */}
			{/* <Blob2 /> */}
			<GridWrapper>
				<Header />
				<Content>
					Content
					{/* <Introduction />
					<About />
					<ProjectsCont />
					<ResumeCont />
					<Contact /> */}
				</Content>
			</GridWrapper>
			<Footer />
		</div>
	);
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #294234;
    font-family: Source Sans Pro;
    font-size: 100%;
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
		/* margin: 20px 20px 0 20px; */
		margin: 1.25rem 1.25rem 0 1.25rem;

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
		/* margin: 32.5px 32.5px 0 32.5px; */
		margin: 2.031rem 2.031rem 0 2.031rem;

		grid-template-areas:
			"hd hd hd hd hd hd"
			"content content content content content content"
			"ft ft ft ft ft ft";
	}

	/* M / Tablet Portrait */
	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: auto 1fr auto;
		/* margin: 45px 45px 0 45px; */
		margin: 2.813rem 2.813rem 0 2.813rem;
		/* margin: 0 2.813rem 0 2.813rem; */

		grid-template-areas:
			"hd hd hd hd hd hd hd hd"
			"content content content content content content content content"
			"ft ft ft ft ft ft ft ft";
	}

	/* L / Tablet Landscape */
	@media only screen and (min-width: 992px) {
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: auto 1fr auto;
		/* margin: 57.5px 57.5px 0 57.5px; */
		margin: 3.594rem 3.594rem 0 3.594rem;
		/* margin: 0 3.594rem 0 3.594rem; */

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
		/* margin: 0 70px 0 70px; */
		/* margin: 0 4.375rem 0 4.375rem; */
		margin: 4.375rem 4.375rem 0 4.375rem;

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
