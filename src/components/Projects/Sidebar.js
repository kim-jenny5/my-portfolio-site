import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Details from "./Details";

export default function Sidebar({ project }) {
  const [showDetails, setShowDetails] = useState(true);

  const handleClick = () => setShowDetails((prev) => !prev);

  return (
    <div className="flex-[1] flex flex-col justify-between border-l border-gray-300 px-3 py-6">
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-3 items-center">
          <div className="shrink-0 shadow-md p-1">
            <img
              src={project.img}
              className="w-[75px] object-cover border border-gray-300"
            />
          </div>
          <div className="font-medium tracking-wide text-wrap leading-[1.3]">
            {project.name}
          </div>
        </div>
        <div className="flex flex-col gap-y-1 text-sm tracking-wide">
          <div className="flex justify-between">
            <div className="font-bold">Information</div>
            <button onClick={handleClick} className="text-orion text-xs">
              {showDetails ? "Show Less" : "Show More"}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Details project={project} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {!project.active && (
        <div className="text-end text-xs text-gray-500 italic">
          * some features may not be working
        </div>
      )}
    </div>
  );
}
