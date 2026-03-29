/**
 * Maps CLI copy targets to paths under `rizzui` package `src/` (published to npm).
 * Seeds are directories (copied recursively for *.ts/*.tsx) or a single file.
 */
export type CopyManifestEntry = {
  id: string;
  label: string;
  seeds: string[];
};

export const COPY_MANIFEST: CopyManifestEntry[] = [
  { id: 'accordion', label: 'Accordion', seeds: ['components/accordion'] },
  { id: 'action-icon', label: 'Action icon', seeds: ['components/action-icon'] },
  { id: 'advanced-checkbox', label: 'Advanced checkbox', seeds: ['components/advanced-checkbox'] },
  { id: 'advanced-radio', label: 'Advanced radio', seeds: ['components/advanced-radio'] },
  { id: 'alert', label: 'Alert', seeds: ['components/alert'] },
  { id: 'announcement', label: 'Announcement', seeds: ['components/announcement'] },
  { id: 'avatar', label: 'Avatar', seeds: ['components/avatar'] },
  { id: 'badge', label: 'Badge', seeds: ['components/badge'] },
  { id: 'blockquote', label: 'Blockquote (typography)', seeds: ['components/typography/blockquote'] },
  { id: 'box', label: 'Box', seeds: ['components/layouts/box'] },
  { id: 'bold', label: 'Bold (typography)', seeds: ['components/typography/bold'] },
  { id: 'button', label: 'Button', seeds: ['components/button'] },
  { id: 'checkbox', label: 'Checkbox', seeds: ['components/checkbox'] },
  { id: 'checkbox-group', label: 'Checkbox group', seeds: ['components/checkbox-group'] },
  { id: 'code', label: 'Code (typography)', seeds: ['components/typography/code'] },
  { id: 'collapse', label: 'Collapse', seeds: ['components/collapse'] },
  { id: 'drawer', label: 'Drawer', seeds: ['components/drawer'] },
  { id: 'dropdown', label: 'Dropdown', seeds: ['components/dropdown'] },
  { id: 'empty', label: 'Empty', seeds: ['components/empty'] },
  { id: 'file-input', label: 'File input', seeds: ['components/upload/file-input.tsx'] },
  { id: 'upload-zone', label: 'Upload zone', seeds: ['components/upload/upload-zone.tsx'] },
  { id: 'upload', label: 'Upload (file input + zone)', seeds: ['components/upload'] },
  { id: 'flex', label: 'Flex', seeds: ['components/layouts/flex'] },
  { id: 'grid', label: 'Grid', seeds: ['components/layouts/grid'] },
  { id: 'input', label: 'Input', seeds: ['components/input'] },
  { id: 'italic', label: 'Italic (typography)', seeds: ['components/typography/italic'] },
  { id: 'loader', label: 'Loader', seeds: ['components/loader'] },
  { id: 'modal', label: 'Modal', seeds: ['components/modal'] },
  { id: 'multi-select', label: 'Multi select', seeds: ['components/multi-select'] },
  { id: 'password', label: 'Password', seeds: ['components/password'] },
  { id: 'pin-code', label: 'Pin code', seeds: ['components/pin-code'] },
  { id: 'popover', label: 'Popover', seeds: ['components/popover'] },
  { id: 'progressbar', label: 'Progress bar', seeds: ['components/progressbar'] },
  { id: 'radial-progressbar', label: 'Radial progress bar', seeds: ['components/radial-progressbar'] },
  { id: 'radio', label: 'Radio', seeds: ['components/radio'] },
  { id: 'radio-group', label: 'Radio group', seeds: ['components/radio-group'] },
  { id: 'select', label: 'Select', seeds: ['components/select'] },
  { id: 'stepper', label: 'Stepper', seeds: ['components/stepper'] },
  { id: 'switch', label: 'Switch', seeds: ['components/switch'] },
  { id: 'table', label: 'Table', seeds: ['components/table'] },
  { id: 'tabs', label: 'Tabs', seeds: ['components/tabs'] },
  { id: 'text', label: 'Text (typography)', seeds: ['components/typography/text'] },
  { id: 'textarea', label: 'Textarea', seeds: ['components/textarea'] },
  { id: 'title', label: 'Title (typography)', seeds: ['components/typography/title'] },
  { id: 'tooltip', label: 'Tooltip', seeds: ['components/tooltip'] },
  { id: 'typography', label: 'Typography (barrel)', seeds: ['components/typography'] },
  { id: 'field-clear-button', label: 'Field clear button', seeds: ['components/field-clear-button.tsx'] },
  { id: 'field-error-text', label: 'Field error text', seeds: ['components/field-error-text.tsx'] },
  { id: 'field-helper-text', label: 'Field helper text', seeds: ['components/field-helper-text.tsx'] },
  { id: 'highlight', label: 'Highlight', seeds: ['components/highlight.tsx'] },
  { id: 'cn', label: 'cn (util)', seeds: ['lib/cn.ts'] },
  { id: 'variants', label: 'createVariant / variants', seeds: ['lib/variants'] },
  { id: 'use-collapse', label: 'useCollapse hook', seeds: ['lib/use-collapse.ts'] },
];

export const COPY_MANIFEST_BY_ID: Record<string, CopyManifestEntry> = Object.fromEntries(
  COPY_MANIFEST.map((e) => [e.id, e])
);
