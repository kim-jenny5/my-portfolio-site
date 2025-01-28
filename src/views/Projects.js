import React, { useState } from 'react';
import { useImageLoader } from '../utils/useImageLoader';
import ReactCardFlip from 'react-card-flip';
import my_travelogue from '../assets/images/my_travelogue.png';

export default function Projects() {
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();
	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = () => {
		setIsFlipped((prev) => !prev);
	};

	return (
		<>
			<div className='relative w-full h-full overflow-hidden bg-gray-100 rounded-md col-start-2 col-span-5 row-start-2 row-span-5 cursor-pointer'>
				<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
					<>
						{renderPlaceholder('my-travelogue')}
						<img
							src={my_travelogue}
							alt='screenshot of a Korean palace'
							className={`absolute top-0 left-0 w-full h-full object-cover transition-transform transition-opacity duration-500 ${
								isLoading('my-travelogue') ? 'opacity-0' : 'opacity-100'
							} hover:scale-110`}
							loading='lazy'
							onLoad={() => handleImageLoad('my-travelogue')}
							onClick={handleFlip}
						/>
					</>
					<div onClick={handleFlip}>
						<h2 className='text-xl font-bold'>Additional Information</h2>
						<p className='mt-2'>
							This is where you can put additional details about the project,
							such as features, technologies used, or links to the live site or
							repo.
						</p>
					</div>
				</ReactCardFlip>
			</div>
			<div className='col-start-7 col-span-5 row-start-2 row-span-5 bg-gray-100 rounded-md'></div>
			<div className='col-start-2 col-span-5 row-start-7 row-span-5 bg-gray-100 rounded-md'></div>
			<div className='col-start-7 col-span-5 row-start-7 row-span-5 bg-gray-100 rounded-md'></div>
		</>
	);
}
