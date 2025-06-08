// import macOSFolder from '../../assets/images/macos_folder.png';

export default function Professional({ projects }) {
	return (
		<>
			<div></div>
			<div>
				{projects.map((project) => (
					// {project.subs ?  }
					<div>{project.name}</div>
				))}
			</div>
		</>
	);
}
