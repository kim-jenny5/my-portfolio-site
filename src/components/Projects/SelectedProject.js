export default function SelectedProject({ projects }) {
	const handleClick = () => {};

	return (
		// <div className='grid grid-cols-3 gap-y-8 p-4'>
		// 	{projects.map((project, index) => (
		// 		<div
		// 			key={index}
		// 			tabIndex={0}
		// 			className='flex flex-col gap-y-1 justify-between items-center cursor-pointer group focus:outline-none'
		// 			onDoubleClick={handleClick}
		// 		>
		// 			<div className='px-3 py-9 rounded group-focus:bg-neutral-200'>
		// 				<div className='shadow-lg p-2 rounded'>
		// 					<img
		// 						src={project.img}
		// 						className='w-[200px] h-[120px] object-cover border border-gray-300 rounded'
		// 					/>
		// 				</div>
		// 			</div>
		// 			<div className='text-sm px-1 rounded group-focus:bg-blue-600 group-focus:text-white'>
		// 				{project.name}
		// 			</div>
		// 		</div>
		// 	))}
		// </div>
		<div className='flex'>
			<div className='flex'>
				{projects.map((project, index) => (
					<div key={index}>
						<img src={project.img} className='w-[160px]' />
					</div>
				))}
			</div>
			{/* <div className='border-l border-gray-300 w-1/4'></div> */}
		</div>
	);
}
