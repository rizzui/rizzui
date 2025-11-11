import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function DataDisplayBlock() {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      <div className="h-8 bg-gray-200 rounded flex items-start px-2 group-hover/card:h-20 transition-all">
        <ChevronRightIcon
          strokeWidth={2}
          className="w-3.5 mt-2 h-auto text-gray-500 group-hover/card:rotate-90 transition-transform"
        />
      </div>
      <div className="w-full bg-gray-200 h-20 rounded flex items-start px-2 group-hover/card:h-8 transition-all">
        <ChevronDownIcon
          strokeWidth={2}
          className="w-3.5 h-auto text-gray-500 mt-2 group-hover/card:-rotate-90 transition-transform"
        />
      </div>
      <div className="h-8 bg-gray-200 rounded flex items-start px-2">
        <ChevronRightIcon
          strokeWidth={2}
          className="w-3.5 mt-2 h-auto text-gray-500"
        />
      </div>
    </div>
  );
}
