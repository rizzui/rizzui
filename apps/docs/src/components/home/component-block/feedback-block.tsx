import React from "react";
import {
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function FeedbackBlock() {
  return (
    <div className="w-full h-[60px] border p-3 ring-[0.5px] ring-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-50 relative">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
          <ExclamationTriangleIcon className="w-4 h-auto" strokeWidth={2} />
        </div>
        <div className="h-4 w-28 bg-gray-200 group-hover/card:w-20 transition-all" />
      </div>
      <XMarkIcon
        className="right-2.5 top-2.5 absolute w-4 h-auto scale-0 group-hover/card:scale-100 transition-all"
        strokeWidth={2}
      />
    </div>
  );
}
