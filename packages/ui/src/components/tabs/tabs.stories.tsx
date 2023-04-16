// tabs.stories.ts|tsx
import { ComponentMeta } from '@storybook/react';

import Tabs, { TabList, Tab, TabPanels, TabPanel } from './';
import cn from '../../lib/cn';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
} as ComponentMeta<typeof Tabs>;

export const WithUnderline = () => (
  <Tabs defaultIndex={1}>
    <TabList className="flex justify-start space-x-8 border-b border-b-gray-300">
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-24 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>My Account</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-24 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>Company</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-24 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>Team Member</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-24 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>Billing</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
    </TabList>

    <TabPanels className="mt-2">
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at quo,
        illo molestias vel tenetur dignissimos possimus repudiandae magnam,
        placeat voluptatem mollitia ex accusamus. Quas, veniam laborum
        voluptatibus alias est laudantium unde natus iste corrupti dolor
        dignissimos soluta quibusdam aperiam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui
        dolore eveniet est cum quisquam natus laudantium nostrum! Unde neque
        nostrum nam accusamus eos. Aspernatur minus quas beatae. Recusandae,
        saepe.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis
        debitis exercitationem non. Id, aliquid alias repudiandae veniam
        praesentium voluptatem quam officiis nihil tempora. Debitis
        exercitationem at sed ab quis officia voluptates maiores ad iusto!iam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, in
        similique minima mollitia quam, nam necessitatibus distinctio aut sequi
        adipisci maiores. Inventore similique possimus aliquid.
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const WithIconUnderline = () => (
  <Tabs>
    <TabList className="flex justify-start space-x-8 border-b border-b-gray-300">
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-28 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <h2>My Account</h2>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-28 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              <h2>Company</h2>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-32 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <h2>Team Member</h2>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative w-24 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:text-gray-800'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              <h2>Billing</h2>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-px h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
    </TabList>

    <TabPanels className="mt-2">
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at quo,
        illo molestias vel tenetur dignissimos possimus repudiandae magnam,
        placeat voluptatem mollitia ex accusamus. Quas, veniam laborum
        voluptatibus alias est laudantium unde natus iste corrupti dolor
        dignissimos soluta quibusdam aperiam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui
        dolore eveniet est cum quisquam natus laudantium nostrum! Unde neque
        nostrum nam accusamus eos. Aspernatur minus quas beatae. Recusandae,
        saepe.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis
        debitis exercitationem non. Id, aliquid alias repudiandae veniam
        praesentium voluptatem quam officiis nihil tempora. Debitis
        exercitationem at sed ab quis officia voluptates maiores ad iusto!iam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, in
        similique minima mollitia quam, nam necessitatibus distinctio aut sequi
        adipisci maiores. Inventore similique possimus aliquid.
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const WithBadgeUndeline = () => (
  <Tabs>
    <TabList className="flex justify-start space-x-8 border-b border-b-gray-300">
      <Tab
        className={({ selected }) =>
          cn(
            'group relative mb-1.5 w-32 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:rounded hover:bg-gray-100 hover:text-gray-700'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex space-x-1">
              <h2>My Account</h2>
              <span
                className={cn(
                  'm-auto rounded-full py-0.5 px-1 text-xs leading-none',
                  selected
                    ? 'bg-gray-900 text-gray-0'
                    : 'bg-gray-200 text-gray-500 group-hover:bg-gray-400 group-hover:text-gray-100'
                )}
              >
                10
              </span>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'group relative mb-1.5 w-32 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:rounded hover:bg-gray-100 hover:text-gray-700'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex space-x-1">
              <h2>Company</h2>
              <span
                className={cn(
                  'm-auto rounded-full py-0.5 px-1 text-xs leading-none',
                  selected
                    ? 'bg-gray-900 text-gray-0'
                    : 'bg-gray-200 text-gray-500 group-hover:bg-gray-400 group-hover:text-gray-100'
                )}
              >
                4
              </span>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'group relative mb-1.5 w-32 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:rounded hover:bg-gray-100 hover:text-gray-700'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex space-x-1">
              <h2>Team Member</h2>
              <span
                className={cn(
                  'm-auto rounded-full py-0.5 px-1 text-xs leading-none',
                  selected
                    ? 'bg-gray-900 text-gray-0'
                    : 'bg-gray-200 text-gray-500 group-hover:bg-gray-400 group-hover:text-gray-100'
                )}
              >
                6
              </span>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'group relative mb-1.5 w-32 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-gray-900'
              : 'text-gray-500 hover:rounded hover:bg-gray-100 hover:text-gray-700'
          )
        }
      >
        {({ selected }) => (
          <>
            <div className="inline-flex space-x-1">
              <h2>Billing</h2>
              <span
                className={cn(
                  'm-auto rounded-full py-0.5 px-1 text-xs leading-none',
                  selected
                    ? 'bg-gray-900 text-gray-0'
                    : 'bg-gray-200 text-gray-500 group-hover:bg-gray-400 group-hover:text-gray-100'
                )}
              >
                3
              </span>
            </div>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-gray-900' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
    </TabList>

    <TabPanels className="mt-2">
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at quo,
        illo molestias vel tenetur dignissimos possimus repudiandae magnam,
        placeat voluptatem mollitia ex accusamus. Quas, veniam laborum
        voluptatibus alias est laudantium unde natus iste corrupti dolor
        dignissimos soluta quibusdam aperiam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui
        dolore eveniet est cum quisquam natus laudantium nostrum! Unde neque
        nostrum nam accusamus eos. Aspernatur minus quas beatae. Recusandae,
        saepe.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis
        debitis exercitationem non. Id, aliquid alias repudiandae veniam
        praesentium voluptatem quam officiis nihil tempora. Debitis
        exercitationem at sed ab quis officia voluptates maiores ad iusto!iam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, in
        similique minima mollitia quam, nam necessitatibus distinctio aut sequi
        adipisci maiores. Inventore similique possimus aliquid.
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const InPills = () => (
  <Tabs>
    <TabList className="flex justify-start space-x-4">
      <Tab
        className={({ selected }) =>
          cn(
            'w-32 rounded py-2 px-3 text-sm outline-none',
            selected
              ? 'bg-gray-100 font-medium text-gray-900'
              : 'bg-gray-0 text-gray-500 hover:bg-gray-100'
          )
        }
      >
        My Account
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'w-32 rounded py-2 px-3 text-sm outline-none',
            selected
              ? 'bg-gray-100 font-medium text-gray-900'
              : 'bg-gray-0 text-gray-500 hover:bg-gray-100'
          )
        }
      >
        Company
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'w-32 rounded py-2 px-3 text-sm outline-none',
            selected
              ? 'bg-gray-100 font-medium text-gray-900'
              : 'bg-gray-0 text-gray-500 hover:bg-gray-100'
          )
        }
      >
        Team Member
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'w-32 rounded py-2 px-3 text-sm outline-none',
            selected
              ? 'bg-gray-100 font-medium text-gray-900'
              : 'bg-gray-0 text-gray-500 hover:bg-gray-100'
          )
        }
      >
        Billing
      </Tab>
    </TabList>

    <TabPanels className="mt-2">
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at quo,
        illo molestias vel tenetur dignissimos possimus repudiandae magnam,
        placeat voluptatem mollitia ex accusamus. Quas, veniam laborum
        voluptatibus alias est laudantium unde natus iste corrupti dolor
        dignissimos soluta quibusdam aperiam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui
        dolore eveniet est cum quisquam natus laudantium nostrum! Unde neque
        nostrum nam accusamus eos. Aspernatur minus quas beatae. Recusandae,
        saepe.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis
        debitis exercitationem non. Id, aliquid alias repudiandae veniam
        praesentium voluptatem quam officiis nihil tempora. Debitis
        exercitationem at sed ab quis officia voluptates maiores ad iusto!iam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, in
        similique minima mollitia quam, nam necessitatibus distinctio aut sequi
        adipisci maiores. Inventore similique possimus aliquid.
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const WithPrimaryUnderline = () => (
  <Tabs>
    <TabList className="flex justify-start space-x-8 border-b border-b-gray-300">
      <Tab
        className={({ selected }) =>
          cn(
            'relative mb-1.5 w-28 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-primary'
              : 'text-gray-500 hover:rounded hover:bg-primary-lighter hover:text-primary-light'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>My Account</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-primary' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative mb-1.5 w-28 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-primary'
              : 'text-gray-500 hover:rounded hover:bg-primary-lighter hover:text-primary-light'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>Company</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-primary' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative mb-1.5 w-28 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-primary'
              : 'text-gray-500 hover:rounded hover:bg-primary-lighter hover:text-primary-light'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>Team Member</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-primary' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
      <Tab
        className={({ selected }) =>
          cn(
            'relative mb-1.5 w-28 py-2 text-sm outline-none',
            selected
              ? 'font-medium text-primary'
              : 'text-gray-500 hover:rounded hover:bg-primary-lighter hover:text-primary-light'
          )
        }
      >
        {({ selected }) => (
          <>
            <h2>Billing</h2>
            <span
              className={cn(
                'absolute left-0 -bottom-[7px] h-0.5 w-full',
                selected ? 'bg-primary' : 'bg-transparent'
              )}
            />
          </>
        )}
      </Tab>
    </TabList>

    <TabPanels className="mt-2">
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at quo,
        illo molestias vel tenetur dignissimos possimus repudiandae magnam,
        placeat voluptatem mollitia ex accusamus. Quas, veniam laborum
        voluptatibus alias est laudantium unde natus iste corrupti dolor
        dignissimos soluta quibusdam aperiam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui
        dolore eveniet est cum quisquam natus laudantium nostrum! Unde neque
        nostrum nam accusamus eos. Aspernatur minus quas beatae. Recusandae,
        saepe.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis
        debitis exercitationem non. Id, aliquid alias repudiandae veniam
        praesentium voluptatem quam officiis nihil tempora. Debitis
        exercitationem at sed ab quis officia voluptates maiores ad iusto!iam.
      </TabPanel>
      <TabPanel className="py-2 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, in
        similique minima mollitia quam, nam necessitatibus distinctio aut sequi
        adipisci maiores. Inventore similique possimus aliquid.
      </TabPanel>
    </TabPanels>
  </Tabs>
);
