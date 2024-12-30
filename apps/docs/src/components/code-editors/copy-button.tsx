import { cn } from "rizzui/cn";
import React from "react";

type CopyButtonProps = {
  value: string;
  className?: string;
};

async function copyToClipboardWithMeta(
  value: string,
  meta?: Record<string, unknown>
) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }, [hasCopied]);

  const tooltipText = hasCopied ? "Copied" : "Copy";

  return (
    <button
      aria-label={tooltipText}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      className={cn(
        "shrink-0 cursor-pointer border-0 p-0 flex items-center relative justify-center w-8 h-8 text-sm text-gray-400 hover:text-gray-200 rounded transition-all ease-in-out",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "w-[18px] h-[18px] transition-all duration-200",
          hasCopied && "opacity-0 [transform:scale(0.33)]"
        )}
      >
        <path
          fill="currentColor"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "w-[18px] h-[18px] absolute opacity-0 [transform:scale(0.33)] transition-all duration-200",
          hasCopied && "opacity-100 [transform:scale(1)]"
        )}
      >
        <path
          fill="#00d600"
          d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"
        />
      </svg>
    </button>
  );
}
