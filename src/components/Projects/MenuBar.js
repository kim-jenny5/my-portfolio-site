import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ListBulletIcon,
	ChevronUpDownIcon,
	Squares2X2Icon,
	ChevronDownIcon,
	ArrowUpOnSquareIcon,
	TagIcon,
	EllipsisHorizontalCircleIcon,
	MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function MenuBar({
	selectedProject,
	topBarText,
	hasHistory,
	hasFuture,
	handleBack,
	handleForward
}) {
	return (
		<div className='flex justify-between py-4 px-6 rounded-t-xl border-b border-gray-300 bg-stone-100 text-gray-600'>
			<div className='flex gap-x-2 items-center font-medium tracking-wide select-none'>
				<div
					className={`cursor-pointer rounded p-2 ${
						hasHistory && selectedProject
							? 'text-gray-600 hover:bg-gray-200'
							: 'text-gray-400 pointer-events-none'
					}`}
					onClick={handleBack}
				>
					<ChevronLeftIcon width={20} />
				</div>
				<div
					className={`cursor-pointer rounded p-2 ${
						hasFuture
							? 'text-gray-600 hover:bg-gray-200'
							: 'text-gray-400 pointer-events-none'
					}`}
					onClick={handleForward}
				>
					<ChevronRightIcon width={20} />
				</div>
				<span className='ml-2'>{topBarText}</span>
			</div>
			<div className='flex'>
				<div className='flex mr-12'>
					<ListBulletIcon width={22} />
					<ChevronUpDownIcon width={20} strokeWidth={2} />
				</div>
				<div className='flex gap-x-4'>
					<div className='flex'>
						<Squares2X2Icon width={22} />
						<ChevronDownIcon width={10} strokeWidth={4} />
					</div>
					<ArrowUpOnSquareIcon width={22} />
					<TagIcon width={22} />
					<div className='flex'>
						<EllipsisHorizontalCircleIcon width={20} />
						<ChevronDownIcon width={10} strokeWidth={4} />
					</div>
				</div>
				<MagnifyingGlassIcon width={20} className='ml-12' />
			</div>
		</div>
	);
}
