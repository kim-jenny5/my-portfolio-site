import { useState } from 'react';
import { motion } from 'framer-motion';
import Content from '../components/Projects/Content';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	QueueListIcon,
	ViewColumnsIcon,
	ChevronUpDownIcon,
	Squares2X2Icon,
	ChevronDownIcon,
	ArrowUpOnSquareIcon,
	TagIcon,
	EllipsisHorizontalCircleIcon,
	MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const DEFAULT_TOP_BAR_TEXT = 'Projects';

export default function Projects() {
	const [topBarText, setTopBarText] = useState(DEFAULT_TOP_BAR_TEXT);
	const [selectedProject, setSelectedProject] = useState();
	const [history, setHistory] = useState([]);
	const [future, setFuture] = useState([]);

	const hasHistory = history?.length > 0;
	const hasFuture = future?.length > 0;

	const selectProject = (project) => {
		setSelectedProject(project);
		setTopBarText(project.name);
		setHistory((prev) => [...prev, selectedProject]);
		setFuture([]);
	};

	const handleBack = () => {
		if (history.length > 0) {
			const previous = history[history.length - 1];
			const newHistory = history.slice(0, -1);

			setSelectedProject(previous);
			setTopBarText(previous?.name || DEFAULT_TOP_BAR_TEXT);
			setHistory(newHistory);
			setFuture((prev) => [selectedProject, ...prev]);
		}
	};

	const handleForward = () => {
		if (future.length > 0) {
			const next = future[0];
			const newFuture = future.slice(1);

			setSelectedProject(next);
			setTopBarText(next?.name || DEFAULT_TOP_BAR_TEXT);
			setHistory((prev) => [...prev, selectedProject]);
			setFuture(newFuture);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.35,
				ease: [0.25, 0.1, 0.25, 1]
			}}
			className='flex flex-col row-start-1 row-span-full col-start-1 col-span-full ml-14 rounded-xl border border-gray-300 shadow-lg overflow-y-auto select-none' // use Tailwind for full coverage
		>
			<div className='flex justify-between py-4 px-6 rounded-t-xl border-b border-gray-300 bg-stone-100 text-gray-600'>
				<div className='flex gap-x-2 items-center font-medium tracking-wide'>
					<button
						className={`cursor-pointer rounded p-2 ${
							hasHistory && selectedProject
								? 'text-gray-600 hover:bg-gray-200'
								: 'text-gray-400 pointer-events-none'
						}`}
						onClick={handleBack}
					>
						<ChevronLeftIcon width={20} />
					</button>
					<button
						className={`cursor-pointer rounded p-2 ${
							hasFuture
								? 'text-gray-600 hover:bg-gray-200'
								: 'text-gray-400 pointer-events-none'
						}`}
						onClick={handleForward}
					>
						<ChevronRightIcon width={20} />
					</button>
					<span className='ml-2'>{topBarText}</span>
				</div>
				<div className='flex'>
					<div className='flex mr-12'>
						{selectedProject ? (
							<ViewColumnsIcon width={22} />
						) : (
							<QueueListIcon width={22} />
						)}
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
			<Content
				selectProject={selectProject}
				selectedProject={selectedProject}
			/>
		</motion.div>
	);
}
