import React from "react";
import { Tooltip, ActionIcon } from "rizzui";

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

export function CopyButton({ value, src, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);
  return (
    <Tooltip content={() => (hasCopied ? "Copied" : "Copy")} placement="top">
      <ActionIcon
        variant="text"
        onClick={() => {
          copyToClipboardWithMeta(value, {
            component: src,
          });
          setHasCopied(true);
        }}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
        </svg>
      </ActionIcon>
    </Tooltip>
  );
}
