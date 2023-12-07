import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function OverlayBlock() {
  return (
    <div className="w-full flex p-4 flex-col h-32 border ring-[0.5px] ring-gray-300 border-gray-300 rounded-xl bg-white dark:bg-gray-50 relative">
      <XMarkIcon
        className="right-2.5 top-2.5 absolute w-4 h-auto"
        strokeWidth={2}
      />
      <div className="h-4 w-28 bg-gray-200" />
      <div className="flex mt-auto gap-3 ml-[calc(100%-124px)] group-hover/card:ml-0 transition-all">
        <div className="rounded h-8 w-14 border border-gray-200 bg-white dark:bg-gray-100" />
        <div className="rounded h-8 w-14 bg-gray-900" />
      </div>
    </div>
  );
}
