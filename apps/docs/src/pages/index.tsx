import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroBlock from '@site/src/components/home/hero-block';
import FeatureBlock from '@site/src/components/home/feature-block';
import ComponentBlock from '@site/src/components/home/component-block';
import Footer from '@site/src/components/home/footer';
import { DividerWithPlus } from '@site/src/components/border-patterns';
import CLIBlock from '@site/src/components/home/cli-block';

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Layout
        description={siteConfig.tagline}
        wrapperClassName="px-5 md:px-8 lg:px-10 bg-stripes 2xl:[background-image:none]!"
      >
        <div className="min-h-[calc(100vh-100px)] border-x border-border max-w-[1800px] mx-auto w-full bg-white dark:bg-transparent">
          <HeroBlock />
          <DividerWithPlus />
          <FeatureBlock />
          <DividerWithPlus />
          <ComponentBlock />
          <DividerWithPlus />
          <CLIBlock />
        </div>
        <div className="border-x border-border max-w-[1800px] mx-auto w-full bg-white dark:bg-transparent">
          <DividerWithPlus />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
