import React from "react";
import { cn, Tab } from "rizzui";
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
    <Tab>
      <Tab.List>
        <Tab.ListItem>Light Theme</Tab.ListItem>
        <Tab.ListItem>Dark Theme</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <LightModeTokens />
        </Tab.Panel>
        <Tab.Panel>dark</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
}

function LightModeTokens() {
  return (
    <div className="@container">
      <table className="!block !border-0 !shadow-none @3xl:!table @3xl:!border @3xl:!shadow-sm">
        <thead className="hidden @3xl:table-header-group">
          <tr>
            <th className="w-40">
              <span className="sr-only">Color</span>
            </th>
            <th>Name</th>
            <th>Value (rgb)</th>
            <th className="!text-left @3xl:!ps-6">Description</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1 gap-5 @md:grid-cols-2 @3xl:table-row-group">
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
  const isContainLighter = token.name.includes("lighter");

  return (
    <tr
      className={cn(
        "!border border-muted shadow-sm @3xl:shadow-none rounded-lg flex flex-col @3xl:table-row",
        isContainLighter
          ? "@3xl:!border-x-0 @3xl:!border-b-0"
          : "@3xl:!border-0"
      )}
    >
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
      <td className="!pt-0 @3xl:!pt-3">
        <TokenClipboard name={token.name} value={cssVariable} />
      </td>
      <td className="!pt-0 @3xl:!pt-3">
        <TokenRGBValue rgb={rgb} />
      </td>
      <td className="!pt-0 @3xl:!pt-3 !text-left @3xl:!ps-6">
        <span className="text-gray-900">{token.description}</span>
      </td>
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
              hex === "#ffffff" && "border border-muted/50",
              hex === "#000000" && "dark:border dark:border-muted/50"
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
          <button
            title="Reset"
            onClick={onReset}
            className="text-gray-900 flex-shrink-0 border-0 shadow-none outline-none p-0"
          >
            <ArrowPathIcon strokeWidth={2} className="w-4 h-4 me-1" />
          </button>
        ) : null}
      </div>
    );
  }
);

function TokenClipboard({ name, value }: { name: string; value: string }) {
  return (
    <div className="whitespace-nowrap flex @3xl:inline-flex ps-3 pe-2.5 py-1 bg-orange-lighter dark:bg-primary-lighter rounded justify-between text-gray-700">
      {name}
      <CopyButton value={value} />
    </div>
  );
}

function TokenRGBValue({ rgb }: { rgb: string }) {
  return <div className="whitespace-nowrap text-gray-700">{rgb}</div>;
}
