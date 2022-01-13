import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// import BlobGraphics from "./BlobGraphics";
import HeaderNav from "./HeaderNav";
import Introduction from "./Introduction";
// import About from "./About";
// import ProjectsCont from "./ProjectsCont";
// import ResumeCont from "./ResumeCont";
// import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Grid>
				{/* <BlobGraphics /> */}
				<HeaderNav />
				{/* <Content>
					<Introduction /> */}
				{/* <About />
				<ProjectsCont />
				<ResumeCont />
				<Contact />
				<Footer /> */}
				{/* </Content> */}
				<Footer />
			</Grid>
		</div>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	/* grid-template-rows: 12.009237875288683vh auto 9.699769053117782vh; */
	/* grid-template-rows: auto auto auto; */
	grid-column-gap: 1.25rem;
	grid-template-areas:
		/* "hd hd hd hd hd hd hd hd hd hd hd hd" */
		"hd"
		/* "content content content content content content content content content content content content" */
		"content"
		/* "ft ft ft ft ft ft ft ft ft ft ft ft"; */
		"ft";
`;

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  padding: 0;
  font-family: Source Sans Pro;
}`;

// const Section = styled.div`
// 	border: solid black 1px;
// `;

// const Serif = styled;

// export const Hd = styled(Section)`
export const HeaderCont = styled.div`
	/* position: fixed; */
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	background-color: lightgray;
	/* grid-area: hd; */
	/* grid-column: 1 / span 12; */
`;

// export const Content = styled(Section)`
export const Content = styled.div`
	grid-area: content;
	grid-row: 2;
	/* width: 100vw; */
`;

export const Ft = styled.div`
	grid-area: ft;
	grid-row: 3;
	font-size: 0.75rem;
	background: #eae3d7;
	text-align: center;
	/* padding: 3.9260969976905313vh 0 3.9260969976905313vh 0; */
`;
