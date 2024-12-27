import React from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import { PACKAGE_MANAGERS } from "./code-editor.config";
import { cn } from "rizzui/cn";
import ClientComponent from "../client-component";
import NpmIcon from "../icons/npm-icon";
import YarnIcon from "../icons/yarn-icon";
import PnpmIcon from "../icons/pnpm-icon";
import BunIcon from "../icons/bun-icon";
import { CopyButton } from "./copy-button";

type MultiFilesEditorProps = {
  files: {
    id: string | number;
    name: string;
    manager: `${PACKAGE_MANAGERS}`;
    value: string;
  }[];
  className?: string;
  editorClassName?: string;
  editorWrapperClassName?: string;
  editorOptions?: EditorProps
};

const PACKAGE_MANAGERS_ICONS = {
  [PACKAGE_MANAGERS.NPM]: <NpmIcon className="size-5" />,
  [PACKAGE_MANAGERS.YARN]: <YarnIcon className="size-5" />,
  [PACKAGE_MANAGERS.PNPM]: <PnpmIcon className="size-5" />,
  [PACKAGE_MANAGERS.BUN]: <BunIcon className="size-5" />,
};

export function MultiFilesEditor({
  files,
  editorClassName,
  className,
  editorWrapperClassName,
  editorOptions,
}: MultiFilesEditorProps) {
  const editorRef = React.useRef(null);
  const [fileName, setFileName] = React.useState(files[0].name);
  const file = files.find((file) => file.name === fileName);

  return (
    <ClientComponent>
      <div className={cn("group/editor", className)}>
        <nav className="flex items-center border-b border-t-0 border-x-0 border-solid border-gray-300 dark:border-stone-700 mb-4 gap-4">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setFileName(file.name)}
              className={cn(
                "border-0 bg-transparent cursor-pointer text-sm flex items-center py-3 px-2.5 relative font-inter transition-all duration-200 h-[47px]",
                fileName === file.name &&
                "pointer-events-none font-medium after:content-[''] after:block after:absolute after:w-full after:h-0.5 after:-bottom-[1px] after:start-0 after:bg-gray-900 dark:after:bg-gray-100"
              )}
            >
              <span
                className={cn(
                  "w-5 h-auto shrink-0 inline-flex items-center me-2",
                )}
              >
                {PACKAGE_MANAGERS_ICONS[file.manager]}
              </span>
              {file.name}
            </button>
          ))}
        </nav>
        <div className={cn("relative h-12", editorWrapperClassName)}>
          <Editor
            height="100%"
            theme="vs-dark"
            path={file.id.toString()}
            defaultLanguage="shell"
            defaultValue={file.value}
            onMount={(editor) => (editorRef.current = editor)}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: "on",
              wrappingIndent: "same",
              wrappingStrategy: "advanced",
              readOnly: true,
              lineNumbers: "off",
              fontSize: 16,
              padding: { top: 11, bottom: 11 },
            }}
            {...editorOptions}
            className={cn("rounded-lg overflow-hidden", editorClassName)}
          />
          <CopyButton
            value={file.value}
            className="absolute end-2 top-2 opacity-0 invisible group-hover/editor:opacity-100 group-hover/editor:visible"
          />
        </div>
      </div>
    </ClientComponent>
  );
}
