import React from "react";
import { cn } from "rizzui";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { hexToRgb } from "@site/src/utils/hext-to-rgb";
import { CopyButton } from "../copy-button";
import { tokens } from "./tokens";

type TokenTypes = {
  name: string;
  hex: string;
  description: string;
};

export default function ColorTokens() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="w-40">
              <span className="sr-only">Color</span>
            </th>
            <th>Name</th>
            <th>Value (rgb)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token: TokenTypes) => (
            <TokenRow key={token.name} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TokenRow({ token }: { token: TokenTypes }) {
  const [hex, setHex] = React.useState(token.hex);
  const [isChange, setIsChange] = React.useState(false);

  const { r, g, b } = hexToRgb(hex);
  const rgb = `${r} ${g} ${b}`;
  const cssVariable = `${token.name}: ${rgb}; /* ${hex} */`;

  return (
    <tr>
      <td>
        <TokenColor
          hex={hex}
          isChange={isChange}
          onChange={(e) => {
            setHex(e.target.value);
            setIsChange(() => true);
          }}
          onReset={() => {
            setHex(token.hex);
            setIsChange(() => false);
          }}
        />
      </td>
      <td>
        <TokenClipboard name={token.name} value={cssVariable} />
      </td>
      <td>
        <TokenRGBValue rgb={rgb} />
      </td>
      <td>{token.description}</td>
    </tr>
  );
}

const TokenColor = React.forwardRef<HTMLInputElement, any>(
  ({ hex, isChange, onReset, ...inputProps }) => {
    return (
      <div className="flex items-center gap-2 relative">
        <label className="relative flex-1">
          <span
            className={cn(
              "inline-flex w-full h-10 rounded shadow-md cursor-pointer",
              hex === "#ffffff" && "border border-gray-100",
              hex === "#000000" && "dark:border dark:border-gray-100"
            )}
            style={{ backgroundColor: hex }}
          />
          <input
            type="color"
            value={hex}
            className="opacity-0 invisible absolute inset-0"
            {...inputProps}
          />
        </label>
        {isChange ? (
          <span
            role="button"
            title="Reset"
            onClick={onReset}
            className="text-gray-900 flex-shrink-0"
          >
            <ArrowPathIcon strokeWidth={2} className="w-4 h-4 me-1" />
          </span>
        ) : null}
      </div>
    );
  }
);

function TokenClipboard({ name, value }: { name: string; value: string }) {
  return (
    <div className="whitespace-nowrap inline-flex ps-3 pe-2.5 py-1 bg-gray-100 rounded text-gray-700">
      {name}
      <CopyButton value={value} />
    </div>
  );
}

function TokenRGBValue({ rgb }: { rgb: string }) {
  return <div className="whitespace-nowrap text-gray-700">{rgb}</div>;
}
