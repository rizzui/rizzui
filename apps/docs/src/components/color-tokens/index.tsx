import React from 'react';
import { cn, Tab } from 'rizzui';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { CopyButton } from '../copy-button';
import { tokens, darkThemeTokens } from './tokens';

type TokenTypes = {
  name: string;
  hex: string;
  oklch: string;
  description: string;
};

export default function ColorTokens() {
  // const { colorMode } = useColorMode();
  // const [tabIndex, setTabIndex] = React.useState(0);
  // React.useEffect(() => {
  //   if (colorMode === "dark") {
  //     setTabIndex(1);
  //   }
  //   if (colorMode !== "dark") {
  //     setTabIndex(0);
  //   }
  // }, [colorMode]);

  return (
    <Tab>
      <Tab.List>
        <Tab.ListItem>Light Theme</Tab.ListItem>
        <Tab.ListItem>Dark Theme</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <TokensTable tokens={tokens} />
        </Tab.Panel>
        <Tab.Panel>
          <TokensTable tokens={darkThemeTokens} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
}

function TokensTable({ tokens }: { tokens: TokenTypes[] }) {
  return (
    <div className="@container">
      <table className="!block !border-0 !shadow-none @3xl:!table @3xl:!border @3xl:!shadow-sm">
        <thead className="hidden @3xl:table-header-group">
          <tr>
            <th className="w-40">
              <span className="sr-only">Color</span>
            </th>
            <th>Name</th>
            <th>Value (OKLCH)</th>
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
  const [oklch, setOklch] = React.useState(token.oklch);
  const [isChange, setIsChange] = React.useState(false);

  const cssVariable = `${token.name}: ${oklch}; /* ${hex} */`;
  const isColorToken = token.hex !== '';

  // Determine if this token should have visual separation (bottom border)
  // Separate after: muted-foreground, border-color, text-secondary, and all *-lighter tokens
  const shouldSeparate =
    token.name === '--border-radius' ||
    token.name === '--text-primary' ||
    token.name.includes('lighter');

  function handleOnChange(e) {
    const tokenValue = e.target.value;
    setHex(tokenValue);
    setIsChange(() => true);
  }

  function handleOnReset() {
    setHex(token.hex);
    setOklch(token.oklch);
    setIsChange(() => false);
  }

  return (
    <tr
      className={cn(
        '!border !border-border shadow-sm @3xl:shadow-none rounded-lg flex flex-col @3xl:table-row',
        shouldSeparate ? '@3xl:!border-x-0 @3xl:!border-b-0' : '@3xl:!border-0'
      )}
    >
      <td>
        <TokenColor
          hex={hex}
          name={token.name}
          isChange={isChange}
          isColorToken={isColorToken}
          onChange={(e) => handleOnChange(e)}
          onReset={() => handleOnReset()}
        />
      </td>
      <td className="!pt-0 @3xl:!pt-3">
        <TokenClipboard name={token.name} value={cssVariable} />
      </td>
      <td className="!pt-0 @3xl:!pt-3">
        <TokenOklchValue oklch={oklch} />
      </td>
      <td className="!pt-0 @3xl:!pt-3 !text-left @3xl:!ps-6">
        <span className="text-gray-900">{token.description}</span>
      </td>
    </tr>
  );
}

const TokenColor = React.forwardRef<HTMLInputElement, any>(
  ({ hex, name, isChange, isColorToken, onReset, ...inputProps }) => {
    // For non-color tokens (border-radius, border-width), show a visual indicator
    if (!isColorToken) {
      return (
        <div className="flex items-center gap-2 relative">
          <div className="w-full h-10 rounded shadow-md border-2 border-dashed border-muted flex items-center justify-center bg-muted/30">
            <span className="text-xs text-gray-600 font-medium">
              Size Token
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 relative">
        <label className="relative flex-1">
          <span
            className={cn(
              'inline-flex w-full h-10 rounded shadow-md cursor-pointer',
              'border border-border',
              hex === '#ffffff' && 'border-2',
              hex === '#000000' && 'dark:border-2'
            )}
            style={{ backgroundColor: hex }}
          />
          <input
            type="color"
            name={name}
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

function TokenOklchValue({ oklch }: { oklch: string }) {
  return (
    <div className="whitespace-nowrap text-gray-700 font-mono text-sm">
      {oklch}
    </div>
  );
}
