import BlobGraphics from "./BlobGraphics";
import HeaderNav from "./HeaderNav";
import Introduction from "./Introduction";
import About from "./About";
import ProjectsCont from "./ProjectsCont";
import ResumeCont from "./ResumeCont";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<BlobGraphics />
			<HeaderNav />
			<Introduction />
			<About />
			<ProjectsCont />
			<ResumeCont />
			<Contact />
			<Footer />
		</div>
	);
}
