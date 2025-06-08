export default function Personal({ projects }) {
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
