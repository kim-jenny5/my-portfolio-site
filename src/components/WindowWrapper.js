import WindowButtons from "./WindowButtons";

export default function WindowWrapper({ children, style: styleFromProps }) {
  return (
    <div
      className={`${styleFromProps} relative w-full h-full overflow-hidden rounded-lg rounded-t-2xl border border-gray-300 shadow-lg`}
    >
      <div className="relative flex justify-between py-4 px-6 rounded-t-xl border-b border-gray-300 bg-stone-100 text-gray-600 z-40">
        <WindowButtons />
      </div>
      {children}
    </div>
  );
}
