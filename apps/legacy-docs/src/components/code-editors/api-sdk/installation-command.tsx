import { v4 as uuidv4 } from "uuid";
import { PACKAGE_MANAGERS } from "../code-editor.config";
import { MultiFilesEditor } from "../multi-files-editor";

const installationCommands = [
  {
    id: uuidv4(),
    name: "npm",
    manager: PACKAGE_MANAGERS.NPM,
    value: `npm i rizzui @headlessui/react @floating-ui/react`,
  },
  {
    id: uuidv4(),
    name: "yarn",
    manager: PACKAGE_MANAGERS.YARN,
    value: `yarn add rizzui @headlessui/react @floating-ui/react`,
  },
  {
    id: uuidv4(),
    name: "pnpm",
    manager: PACKAGE_MANAGERS.PNPM,
    value: `pnpm i rizzui @headlessui/react @floating-ui/react`,
  },
  {
    id: uuidv4(),
    name: "bun",
    manager: PACKAGE_MANAGERS.BUN,
    value: `bun add rizzui @headlessui/react @floating-ui/react`,
  },
];

export function InstallationCommand() {
  return <MultiFilesEditor files={installationCommands} />;
}
