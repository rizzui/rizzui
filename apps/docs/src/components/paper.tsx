import React, { useState, PropsWithChildren } from "react";
import { Button, cn } from "rizzui";

export default function Paper({
  className,
  children,
  disableShowCodeBtn,
}: PropsWithChildren<{ className?: string; disableShowCodeBtn?: boolean }>) {
  const [toggleCode, setToggleCode] = useState(false);
  return (
    <div
      className={cn(
        "mb-2.5 pt-10 pb-12 min-h-[200px] flex flex-col justify-center items-center px-6 relative shadow rounded border border-gray-200",
        !toggleCode && "[&+.theme-code-block]:hidden",
        className
      )}
    >
      <>{children}</>

      {!disableShowCodeBtn ? (
        <Button
          size="sm"
          variant="outline"
          className="absolute h-7 bottom-2 right-2 rounded"
          onClick={() => setToggleCode((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          {toggleCode ? "Hide Code" : "Show Code"}
        </Button>
      ) : null}
    </div>
  );
}
