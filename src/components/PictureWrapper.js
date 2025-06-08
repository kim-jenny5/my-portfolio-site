export default function PictureWrapper({ children, style: styleFromProps }) {
	return (
		<div
			className={`${styleFromProps} relative w-full h-full overflow-hidden rounded-lg rounded-t-2xl border border-gray-300 shadow-lg`}
		>
			<div className='relative flex justify-between py-4 px-6 rounded-t-xl border-b border-gray-300 bg-stone-100 text-gray-600 z-40'>
				<div className='flex gap-x-2'>
					<div className='w-3 h-3 rounded-full bg-red-500'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-400'></div>
					<div className='w-3 h-3 rounded-full bg-green-500'></div>
				</div>
			</div>
			{children}
		</div>
	);
}
