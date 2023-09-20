import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import Tabs, { TabList, Tab, TabPanels, TabPanel } from '../components/tabs';
import { cn } from '../lib/cn';

test('Render tab items and tab panels', async () => {
  render(
    <Tabs defaultIndex={1}>
      <TabList className="flex justify-start space-x-8 border-b border-b-gray-300">
        <Tab
          data-testid="tab-1"
          className={({ selected }) =>
            cn(
              'relative w-24 py-2 text-sm outline-none',
              selected
                ? 'font-medium text-gray-900'
                : 'text-gray-500 hover:text-gray-800',
            )
          }
        >
          {({ selected }) => (
            <>
              <h2>My Account</h2>
              <span
                className={cn(
                  'absolute -bottom-px left-0 h-0.5 w-full',
                  selected ? 'bg-gray-900' : 'bg-transparent',
                )}
              />
            </>
          )}
        </Tab>
        <Tab
          data-testid="tab-2"
          className={({ selected }) =>
            cn(
              'relative w-24 py-2 text-sm outline-none',
              selected
                ? 'font-medium text-gray-900'
                : 'text-gray-500 hover:text-gray-800',
            )
          }
        >
          {({ selected }) => (
            <>
              <h2>Company</h2>
              <span
                className={cn(
                  'absolute -bottom-px left-0 h-0.5 w-full',
                  selected ? 'bg-gray-900' : 'bg-transparent',
                )}
              />
            </>
          )}
        </Tab>
      </TabList>

      <TabPanels data-testid="panels" className="mt-2">
        <TabPanel
          data-testid="panel-1"
          className="py-2 text-sm leading-6 text-gray-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at quo,
          illo molestias vel tenetur dignissimos possimus repudiandae magnam,
          placeat voluptatem mollitia ex accusamus. Quas, veniam laborum
          voluptatibus alias est laudantium unde natus iste corrupti dolor
          dignissimos soluta quibusdam aperiam.
        </TabPanel>
        <TabPanel
          data-testid="panel-2"
          className="py-2 text-sm leading-6 text-gray-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui
          dolore eveniet est cum quisquam natus laudantium nostrum! Unde neque
          nostrum nam accusamus eos. Aspernatur minus quas beatae. Recusandae,
          saepe.
        </TabPanel>
      </TabPanels>
    </Tabs>,
  );
  const firstTab = screen.getByTestId('tab-1');
  const secondTab = screen.getByTestId('tab-2');
  expect(firstTab).toBeInTheDocument();
  expect(secondTab).toBeInTheDocument();

  const panels = screen.getByTestId('panels');
  expect(panels).toBeVisible();

  const secondPanel = screen.getByTestId('panel-2');
  expect(secondPanel).toBeVisible();

  user.click(firstTab);
  const firstPanel = screen.getByTestId('panel-2');
  expect(firstPanel).toBeVisible();
  await waitFor(() => expect(secondPanel).not.toBeVisible());
});
