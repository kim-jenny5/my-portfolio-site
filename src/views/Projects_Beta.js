import MenuBar from '../components/Projects/MenuBar';
import Projects from '../components/Projects/Projects';

export default function Container({
	selectedProject,
	topBarText,
	hasHistory,
	hasFuture,
	handleBack,
	handleForward,
	selectProject,
	macOSFolder,
	PROJECTS
}) {
	return (
		<div className='row-start-1 row-span-full col-start-1 col-span-full ml-14 rounded-xl border border-gray-300 shadow-lg'>
			<MenuBar
				selectedProject={selectedProject}
				topBarText={topBarText}
				hasHistory={hasHistory}
				hasFuture={hasFuture}
				handleBack={handleBack}
				handleForward={handleForward}
			/>
			{selectedProject ? (
				<div>Selected project here</div>
			) : (
				<Projects
					projects={PROJECTS}
					selectProject={selectProject}
					macOSFolder={macOSFolder}
				/>
			)}
		</div>
	);
}
