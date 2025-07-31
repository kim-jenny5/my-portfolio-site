import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Content from '../components/Projects/Content';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	QueueListIcon,
	ListBulletIcon,
	ViewColumnsIcon,
	ChevronUpDownIcon,
	Squares2X2Icon,
	ChevronDownIcon,
	ArrowUpOnSquareIcon,
	TagIcon,
	EllipsisHorizontalCircleIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import WindowWrapper from '../components/WindowWrapper';
import WindowButtons from '../components/WindowButtons';
import { useIsTabletLandscapeUp } from '../utils/useIsTabletLandscapeUp';

const DEFAULT_TOP_BAR_TEXT = 'Projects';

export default function Projects() {
	const [topBarText, setTopBarText] = useState(DEFAULT_TOP_BAR_TEXT);
	const [selectedProject, setSelectedProject] = useState();
	const [history, setHistory] = useState([]);
	const [future, setFuture] = useState([]);

	const hasHistory = history?.length > 0;
	const hasFuture = future?.length > 0;

	const isTabletLandscapeUp = useIsTabletLandscapeUp();

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

	if (!isTabletLandscapeUp) {
		return (
			<AnimatePresence>
				<motion.div
					className='w-full h-full row-start-5 row-span-4 col-start-2 col-span-10 tablet:row-start-5 tablet:row-span-3 tablet:col-start-3 tablet:col-span-8'
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
				>
					<WindowWrapper>
						<div className='absolute flex flex-col gap-y-1 justify-center text-gray-500 px-4 tablet:px-6 translate-y-1/2 tablet:translate-y-3/4'>
							<div>Bigger screen, better vibes ✨</div>
							<div className='text-sm'>
								Please view this page on a desktop or rotated tablet!
							</div>
						</div>
					</WindowWrapper>
				</motion.div>
			</AnimatePresence>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.35,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			className='flex flex-col row-start-1 row-span-full col-start-1 col-span-full ml-14 rounded-xl border border-gray-300 shadow-lg select-none'
		>
			<div className='flex w-full justify-between py-4 px-6 rounded-t-xl border-b border-gray-300 bg-stone-100 text-gray-600 overflow-hidden'>
				<div className='flex items-center gap-x-6'>
					<WindowButtons />
					<div>
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
					</div>
				</div>
				<div className='flex'>
					<div className='flex mr-12'>
						{selectedProject ? (
							selectedProject.name === 'Student' ? (
								<ViewColumnsIcon width={22} />
							) : (
								<ListBulletIcon width={22} />
							)
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
