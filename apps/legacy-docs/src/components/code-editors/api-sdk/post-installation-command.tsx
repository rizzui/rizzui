import { v4 as uuidv4 } from "uuid";
import { PACKAGE_MANAGERS } from "../code-editor.config";
import { MultiFilesEditor } from "../multi-files-editor";

const postInstallationCommands = [
    {
        id: uuidv4(),
        name: "npm",
        manager: PACKAGE_MANAGERS.NPM,
        value: `npm i -D tailwindcss postcss autoprefixer @tailwindcss/forms`,
    },
    {
        id: uuidv4(),
        name: "yarn",
        manager: PACKAGE_MANAGERS.YARN,
        value: `yarn add -D tailwindcss postcss autoprefixer @tailwindcss/forms`,
    },
    {
        id: uuidv4(),
        name: "pnpm",
        manager: PACKAGE_MANAGERS.PNPM,
        value: `pnpm i -D tailwindcss postcss autoprefixer @tailwindcss/forms`,
    },
    {
        id: uuidv4(),
        name: "bun",
        manager: PACKAGE_MANAGERS.BUN,
        value: `bun add -D tailwindcss postcss autoprefixer @tailwindcss/forms`,
    },
];

export function PostInstallationCommand() {
    return <MultiFilesEditor files={postInstallationCommands} />;
}
