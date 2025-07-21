import { useEffect, useRef } from "react";

export function useClickOutside(callback, isMenuOpen) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, isMenuOpen]);

  return ref;
}
