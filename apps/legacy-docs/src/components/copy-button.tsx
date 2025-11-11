import React from "react";
import { Tooltip } from "rizzui";
import {
  ClipboardDocumentIcon,
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
      size="sm"
      color="invert"
      rounded="pill"
      placement="top"
      content={hasCopied ? "Copied!" : "Copy to clipboard"}
      className="font-medium"
    >
      {hasCopied ? (
        <ClipboardDocumentCheckIcon
          strokeWidth={1.6}
          className="size-[17px] ms-5 cursor-pointer"
        />
      ) : (
        <ClipboardDocumentIcon
          strokeWidth={1.6}
          onClick={() => {
            copyToClipboardWithMeta(value, {
              component: src,
            });
            setHasCopied(true);
          }}
          className="size-[17px] ms-5 cursor-pointer"
        />
      )}
    </Tooltip>
  );
}
