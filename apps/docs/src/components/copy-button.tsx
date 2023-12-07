import React from "react";
import { Tooltip } from "rizzui";
import {
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

interface CopyButtonProps {
  value: string;
  src?: string;
}

async function copyToClipboardWithMeta(
  value: string,
  meta?: Record<string, unknown>
) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({ value, src }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }, [hasCopied]);
  return (
    <Tooltip
      content={hasCopied ? "Copied!" : "Copy to clipboard"}
      rounded="sm"
      placement="top"
      size="sm"
    >
      {hasCopied ? (
        <ClipboardDocumentCheckIcon className="w-3.5 h-auto ms-1.5 cursor-pointer" />
      ) : (
        <ClipboardIcon
          onClick={() => {
            copyToClipboardWithMeta(value, {
              component: src,
            });
            setHasCopied(true);
          }}
          className="w-3.5 h-auto ms-1.5 cursor-pointer"
        />
      )}
    </Tooltip>
  );
}
