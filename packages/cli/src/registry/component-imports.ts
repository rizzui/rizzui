import { COPY_MANIFEST_BY_ID } from '../add-copy/copy-manifest';

export type ComponentRegistryEntry = {
  subpath: string;
  importLine: string;
  peerNote?: string;
};

export type ComponentDefinitionRow = {
  slugs: string[];
  entry: ComponentRegistryEntry;
  /** Matches `id` in `COPY_MANIFEST` for `rizzui add` source copy */
  copyId: string;
};

const e = (subpath: string, symbols: string | string[], peerNote?: string): ComponentRegistryEntry => {
  const list = Array.isArray(symbols) ? symbols : [symbols];
  return {
    subpath,
    importLine: `import { ${list.join(', ')} } from 'rizzui/${subpath}';`,
    peerNote,
  };
};

export const COMPONENT_DEFINITIONS: ComponentDefinitionRow[] = [
  { slugs: ['accordion'], copyId: 'accordion', entry: e('accordion', 'Accordion') },
  { slugs: ['action-icon', 'actionicon'], copyId: 'action-icon', entry: e('action-icon', 'ActionIcon') },
  {
    slugs: ['advanced-checkbox'],
    copyId: 'advanced-checkbox',
    entry: e('advanced-checkbox', 'AdvancedCheckbox'),
  },
  { slugs: ['advanced-radio'], copyId: 'advanced-radio', entry: e('advanced-radio', 'AdvancedRadio') },
  { slugs: ['alert'], copyId: 'alert', entry: e('alert', 'Alert') },
  { slugs: ['announcement'], copyId: 'announcement', entry: e('announcement', 'Announcement') },
  { slugs: ['avatar'], copyId: 'avatar', entry: e('avatar', 'Avatar') },
  { slugs: ['badge'], copyId: 'badge', entry: e('badge', 'Badge') },
  { slugs: ['blockquote'], copyId: 'blockquote', entry: e('blockquote', 'Blockquote') },
  { slugs: ['bold'], copyId: 'bold', entry: e('typography', 'Bold') },
  { slugs: ['box'], copyId: 'box', entry: e('box', 'Box') },
  { slugs: ['button', 'btn'], copyId: 'button', entry: e('button', 'Button') },
  { slugs: ['checkbox'], copyId: 'checkbox', entry: e('checkbox', 'Checkbox') },
  { slugs: ['checkbox-group'], copyId: 'checkbox-group', entry: e('checkbox-group', 'CheckboxGroup') },
  { slugs: ['code'], copyId: 'code', entry: e('code', 'Code') },
  { slugs: ['collapse'], copyId: 'collapse', entry: e('collapse', 'Collapse') },
  { slugs: ['drawer'], copyId: 'drawer', entry: e('drawer', 'Drawer') },
  { slugs: ['dropdown'], copyId: 'dropdown', entry: e('dropdown', 'Dropdown') },
  { slugs: ['empty'], copyId: 'empty', entry: e('empty', 'Empty') },
  { slugs: ['file-input', 'fileinput'], copyId: 'file-input', entry: e('file-input', 'FileInput') },
  { slugs: ['flex'], copyId: 'flex', entry: e('flex', 'Flex') },
  { slugs: ['grid'], copyId: 'grid', entry: e('grid', 'Grid') },
  { slugs: ['input'], copyId: 'input', entry: e('input', 'Input') },
  { slugs: ['italic'], copyId: 'italic', entry: e('typography', 'Italic') },
  { slugs: ['loader'], copyId: 'loader', entry: e('loader', 'Loader') },
  { slugs: ['modal'], copyId: 'modal', entry: e('modal', 'Modal') },
  { slugs: ['multi-select', 'multiselect'], copyId: 'multi-select', entry: e('multi-select', 'MultiSelect') },
  { slugs: ['password'], copyId: 'password', entry: e('password', 'Password') },
  { slugs: ['pin-code', 'pincode'], copyId: 'pin-code', entry: e('pin-code', 'PinCode') },
  { slugs: ['popover'], copyId: 'popover', entry: e('popover', 'Popover') },
  { slugs: ['progressbar', 'progress'], copyId: 'progressbar', entry: e('progressbar', 'Progressbar') },
  {
    slugs: ['radial-progressbar'],
    copyId: 'radial-progressbar',
    entry: e('radial-progressbar', 'RadialProgressbar'),
  },
  { slugs: ['radio'], copyId: 'radio', entry: e('radio', 'Radio') },
  { slugs: ['radio-group'], copyId: 'radio-group', entry: e('radio-group', 'RadioGroup') },
  { slugs: ['select'], copyId: 'select', entry: e('select', 'Select') },
  { slugs: ['stepper'], copyId: 'stepper', entry: e('stepper', 'Stepper') },
  { slugs: ['switch'], copyId: 'switch', entry: e('switch', 'Switch') },
  { slugs: ['table'], copyId: 'table', entry: e('table', 'Table') },
  { slugs: ['tabs', 'tab'], copyId: 'tabs', entry: e('tabs', 'Tab') },
  { slugs: ['text'], copyId: 'text', entry: e('text', 'Text') },
  { slugs: ['textarea'], copyId: 'textarea', entry: e('textarea', 'Textarea') },
  { slugs: ['title'], copyId: 'title', entry: e('title', 'Title') },
  { slugs: ['tooltip'], copyId: 'tooltip', entry: e('tooltip', 'Tooltip') },
  { slugs: ['upload-zone', 'uploadzone'], copyId: 'upload-zone', entry: e('upload-zone', 'UploadZone') },
  { slugs: ['upload'], copyId: 'upload', entry: e('upload', ['FileInput', 'UploadZone']) },
  {
    slugs: ['variants', 'create-variant'],
    copyId: 'lib',
    entry: {
      subpath: 'variants',
      importLine: "import { createVariant, type VariantProps } from 'rizzui/variants';",
    },
  },
  {
    slugs: ['cn'],
    copyId: 'lib',
    entry: {
      subpath: 'cn',
      importLine: "import { cn } from 'rizzui/cn';",
    },
  },
];

/** Slug from CLI args -> copy manifest id */
export const SLUG_TO_COPY_ID: Record<string, string> = {};
for (const row of COMPONENT_DEFINITIONS) {
  for (const slug of row.slugs) {
    SLUG_TO_COPY_ID[slug.toLowerCase()] = row.copyId;
  }
}

export const COMPONENT_REGISTRY: Record<string, ComponentRegistryEntry> = {};
for (const row of COMPONENT_DEFINITIONS) {
  for (const slug of row.slugs) {
    COMPONENT_REGISTRY[slug.toLowerCase()] = row.entry;
  }
}

export const ALL_COMPONENT_SLUGS = Array.from(
  new Set(COMPONENT_DEFINITIONS.flatMap((r) => r.slugs))
).sort();

export function allUniqueImportLines(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const row of COMPONENT_DEFINITIONS) {
    if (!seen.has(row.entry.importLine)) {
      seen.add(row.entry.importLine);
      out.push(row.entry.importLine);
    }
  }
  return out.sort();
}

export function resolveComponent(slug: string): ComponentRegistryEntry | undefined {
  return COMPONENT_REGISTRY[slug.toLowerCase()];
}

const COPY_SLUG_ALIASES: Record<string, string> = {
  usecollapse: 'collapse',
  use_collapse: 'collapse',
  'use-collapse': 'collapse',
};

export function resolveSlugToCopyId(slug: string): string | undefined {
  const key = slug.toLowerCase();
  if (COPY_MANIFEST_BY_ID[key]) {
    return key;
  }
  const aliased = COPY_SLUG_ALIASES[key];
  if (aliased && COPY_MANIFEST_BY_ID[aliased]) {
    return aliased;
  }
  return SLUG_TO_COPY_ID[key];
}
