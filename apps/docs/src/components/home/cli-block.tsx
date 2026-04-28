import React from 'react';
import { Title } from 'rizzui/title';
import { Text } from 'rizzui/text';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from 'rizzui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useHistory } from '@docusaurus/router';

export default function CLIBlock() {
  const history = useHistory();

  return (
    <section className="pt-10 md:pt-16 xl:pt-20 2xl:pt-24 pb-14 md:pb-20 group px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 2xl:gap-10">
        <header className="flex-1 order-1 lg:order-0">
          <Title as="h2" className="page-section-heading-title">
            Get started with RizzUI CLI
          </Title>
          <Text className="text-base 2xl:text-lg text-gray-500">
            Install RizzUI in your Next.js or TanStack Start project with a
            single command. Configure Tailwind CSS v4, scaffold dark mode
            helpers, and vendor components locally for complete control.
          </Text>
          <div className="flex items-start gap-4 mt-6 2xl:mt-8">
            <div className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                viewBox="0 0 24 24"
                className="size-5 2xl:size-6"
              >
                <path d="M12 19h8M4 17l6-6-6-6" />
              </svg>
            </div>
            <div>
              <Title
                as="h5"
                className="text-sm 2xl:text-base! font-medium! mb-0.5!"
              >
                One Command Setup
              </Title>
              <Text className="text-sm 2xl:text-base!">
                Get everything configured automatically
              </Text>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4 2xl:mt-5 mb-6 2xl:mb-8">
            <div className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.65}
                viewBox="0 0 24 24"
                className="size-[18px] 2xl:size-5"
              >
                <path d="M12 15V3M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </div>
            <div>
              <Title
                as="h5"
                className="text-sm 2xl:text-base! font-medium! mb-0.5!"
              >
                Vendor Components
              </Title>
              <Text className="text-sm 2xl:text-base!">
                Bring components into your repo, customize as needed
              </Text>
            </div>
          </div>
          <Button
            className="text-sm hover:shadow-2xl transition-all relative min-w-[160px]"
            onClick={() => history.push('/docs/guide/getting-started')}
          >
            View Documentation{' '}
            <ArrowRightIcon strokeWidth={1.75} className="size-4 ms-2" />
          </Button>
        </header>
        <div className="border border-border rounded-lg p-1 flex-1 order-0 lg:order-1">
          <img
            alt="RizzUI CLI"
            loading="lazy"
            src={useBaseUrl('/img/rizzui-cli.png')}
            className="w-full h-full object-cover rounded"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </section>
  );
}
