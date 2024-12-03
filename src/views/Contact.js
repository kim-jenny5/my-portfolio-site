import React from 'react';
import { useImageLoader } from '../utils/useImageLoader';
import profile from '../assets/images/contact_profile.jpg';
import arrow from '../assets/images/arrow.png';

export default function Contact() {
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

	return (
		<>
			<div className='flex font-bold row-start-5 col-start-2 col-end-13 text-3xl tablet:text-6xl tabletLandscape:row-start-1 tabletLandscape:items-end desktop:text-8xl'>
				Contact Me
			</div>
			<div className='relative w-full h-full overflow-hidden row-start-6 row-span-2 col-start-1 col-span-4 -mt-8 tabletLandscape:-mt-20 tabletLandscape:ml-4 tabletLandscape:row-start-2 tabletLandscape:col-start-1 tabletLandscape:col-span-2'>
				{renderPlaceholder('arrow')}
				<img
					src={arrow}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						isLoading('arrow') ? 'opacity-0' : 'opacity-100'
					}`}
					onLoad={() => handleImageLoad('arrow')}
				/>
			</div>
			{/* <div className='flex flex-col justify-between row-start-6 row-span-6 col-start-5 col-span-8 tabletLandscape:row-start-2 tabletLandscape:col-start-3 tabletLandscape:col-span-full'> */}
			<div className='flex flex-col justify-between row-start-6 row-span-3 col-start-5 col-span-8 tabletLandscape:row-start-2 tabletLandscape:col-start-3 tabletLandscape:col-span-full'>
				<div>
					<a
						href='mailto:jennykimdev@gmail.com'
						className='text-lg tracking-wider underline underline-offset-[12px] hover:text-orion tabletLandscape:text-3xl'
					>
						jennykimdev@gmail.com
					</a>
				</div>
				<div className='flex flex-col gap-y-2 uppercase'>
					<div className='font-bold tracking-wide'>Other Links</div>
					<div className='flex flex-col gap-y-1 pl-1 tracking-wider'>
						<div className='flex gap-x-2'>
							🔗
							<a
								href='https://www.linkedin.com/in/kim-jenny5/'
								target='_blank'
								className='hover:text-orion'
							>
								LinkedIn
							</a>
						</div>
						<div className='flex gap-x-2'>
							🐈‍⬛
							<a
								href='https://github.com/kim-jenny5'
								target='_blank'
								className='hover:text-orion'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='relative w-full h-full overflow-hidden row-start-2 row-span-3 col-start-2 col-span-6 tabletLandscape:row-span-4 tabletLandscape:col-end-11 tabletLandscape:col-span-3'>
				{renderPlaceholder('contact-profile')}
				<img
					src={profile}
					className={`absolute top-0 left-0 w-full h-full object-contain brightness-125 transition-opacity duration-500 ${
						isLoading('contact-profile') ? 'opacity-0' : 'opacity-100'
					}`}
					onLoad={() => handleImageLoad('contact-profile')}
				/>
			</div>
		</>
	);
}
