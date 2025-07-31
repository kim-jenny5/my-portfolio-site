import WindowButtons from './WindowButtons';

export default function WindowWrapper({ children, style: styleFromProps }) {
  return (
    <div
      className={`${styleFromProps} relative h-full w-full overflow-hidden rounded-lg rounded-t-2xl border border-gray-300 shadow-lg`}
    >
      <div className='relative z-40 flex justify-between rounded-t-xl border-b border-gray-300 bg-stone-100 px-6 py-4 text-gray-600'>
        <WindowButtons />
      </div>
      {children}
    </div>
  );
}
