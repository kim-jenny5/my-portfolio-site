// import macOSFolder from '../../assets/images/macos_folder.png';

export default function Professional({ projects }) {
	return (
		<>
			<div>
				{projects.map((project) => (
					<div>{project.name}</div>
				))}
			</div>
		</>
	);
}
