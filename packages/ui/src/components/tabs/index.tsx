import { Tab as HeadlessUITab } from '@headlessui/react';

import Tabs from './tabs';
import { ExtractProps } from '../../lib/extract-props';

export type { TabsProps } from './tabs';

export type TabListProps = ExtractProps<typeof HeadlessUITab.List>;
export type TabProps = ExtractProps<typeof HeadlessUITab>;
export type TabPanelsProps = ExtractProps<typeof HeadlessUITab.Panels>;
export type TabPanelProps = ExtractProps<typeof HeadlessUITab.Panel>;

export const TabList: typeof HeadlessUITab.List = HeadlessUITab.List;
export const Tab: typeof HeadlessUITab = HeadlessUITab;
export const TabPanels: typeof HeadlessUITab.Panels = HeadlessUITab.Panels;
export const TabPanel: typeof HeadlessUITab.Panel = HeadlessUITab.Panel;

export default Tabs;
