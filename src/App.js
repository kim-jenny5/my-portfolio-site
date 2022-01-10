import BlobGraphics from "./BlobGraphics";
import HeaderNav from "./HeaderNav";
import Introduction from "./Introduction";
import About from "./About";
import ProjectsCont from "./ProjectsCont";

export default function App() {
	return (
		<div className="App">
			<BlobGraphics />
			<HeaderNav />
			<Introduction />
			<About />
			<ProjectsCont />
		</div>
	);
}
