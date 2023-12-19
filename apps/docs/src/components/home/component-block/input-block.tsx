import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function InputBlock() {
  return (
    <div className="w-full">
      <div className="h-9 border ring-[0.5px] ring-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-50 flex items-center justify-between px-3.5">
        <MagnifyingGlassIcon
          className="w-4 h-auto scale-0 group-hover/card:scale-100 transition-transform"
          strokeWidth={2}
        />
        <ChevronDownIcon
          className="w-4 h-auto group-hover/card:scale-0 transition-transform"
          strokeWidth={2}
        />
      </div>
    </div>
  );
}
