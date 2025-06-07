import Details from './Details';

export default function Sidebar({ project }) {
	return (
		<div className='flex-[1] flex flex-col gap-y-6 border-l border-gray-300 px-3 py-6'>
			<div className='flex gap-x-3 items-center'>
				<div className='shrink-0 shadow-md p-1'>
					<img
						src={project.img}
						className='w-[75px] object-cover border border-gray-300'
					/>
				</div>
				<div className='font-medium tracking-wide text-wrap leading-[1.3]'>
					{project.name}
				</div>
			</div>
			<div className='flex flex-col gap-y-1 text-sm tracking-wide'>
				<div className='flex justify-between'>
					<div className='font-bold'>Information</div>
					<div className='text-orion text-xs'>Show Less</div>
				</div>
				<Details project={project} />
			</div>
		</div>
	);
}
