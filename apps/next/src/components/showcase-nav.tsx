import Link from 'next/link';

const components = [
  { name: 'Button', path: '/' },
  { name: 'ActionIcon', path: '/action-icon' },
  { name: 'Badge', path: '/badge' },
  { name: 'Input', path: '/input' },
  { name: 'Select', path: '/select' },
  { name: 'Multi-Select', path: '/multi-select' },
  { name: 'Checkbox', path: '/checkbox' },
  { name: 'Radio', path: '/radio' },
  { name: 'Switch', path: '/switch' },
  { name: 'Textarea', path: '/textarea' },
  { name: 'Password', path: '/password' },
  { name: 'Pin Code', path: '/pin-code' },
  { name: 'Upload', path: '/upload' },
  { name: 'Adv. Checkbox', path: '/advanced-checkbox' },
  { name: 'Adv. Radio', path: '/advanced-radio' },
  { name: 'Checkbox Group', path: '/checkbox-group' },
  { name: 'Radio Group', path: '/radio-group' },
  { name: 'Alert', path: '/alert' },
  { name: 'Avatar', path: '/avatar' },
  { name: 'Loader', path: '/loader' },
  { name: 'Typography', path: '/typography' },
  { name: 'Modal', path: '/modal' },
  { name: 'Tooltip', path: '/tooltip' },
  { name: 'Dropdown', path: '/dropdown' },
  { name: 'Drawer', path: '/drawer' },
  { name: 'Popover', path: '/popover' },
  { name: 'Tabs', path: '/tabs' },
  { name: 'Accordion', path: '/accordion' },
  { name: 'Collapse', path: '/collapse' },
  { name: 'Progressbar', path: '/progressbar' },
  { name: 'Radial Progress', path: '/radial-progressbar' },
  { name: 'Table', path: '/table' },
  { name: 'Empty', path: '/empty' },
  { name: 'Stepper', path: '/stepper' },
  { name: 'Announcement', path: '/announcement' },
  { name: 'Box', path: '/box' },
  { name: 'Flex', path: '/flex' },
  { name: 'Grid', path: '/grid' },
];

interface ShowcaseNavProps {
  currentPath: string;
}

export function ShowcaseNav({ currentPath }: ShowcaseNavProps) {
  return (
    <div className="flex justify-center gap-2 flex-wrap mb-8">
      {components.map((component) => (
        <Link
          key={component.path}
          href={component.path}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            currentPath === component.path
              ? 'bg-primary text-primary-foreground'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          {component.name}
        </Link>
      ))}
      <Link
        href="/components"
        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:opacity-90"
      >
        📚 All
      </Link>
    </div>
  );
}

