import React from 'react';
import { Tooltip } from 'rizzui';
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

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
      placement="top"
      content={hasCopied ? 'Copied!' : 'Copy to clipboard'}
      className="font-medium"
    >
      {hasCopied ? (
        <ClipboardDocumentCheckIcon
          strokeWidth={1.6}
          className="size-[17px] ms-2 cursor-pointer"
          aria-label="Copied to clipboard"
          role="img"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            copyToClipboardWithMeta(value, {
              component: src,
            });
            setHasCopied(true);
          }}
          aria-label="Copy to clipboard"
          className="size-[17px] ms-2 cursor-pointer border-0 bg-transparent p-0"
        >
          <ClipboardDocumentIcon
            strokeWidth={1.6}
            className="size-[17px]"
            aria-hidden="true"
          />
        </button>
      )}
    </Tooltip>
  );
}
