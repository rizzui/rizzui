import React from "react";
// import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroBlock from "@site/src/components/home/hero-block";
import FeatureBlock from "@site/src/components/home/feature-block";
import ComponentBlock from "@site/src/components/home/component-block";
import Footer from "@site/src/components/home/footer";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="🚀 A Modern and Minimal React UI Library built with TailwindCSS. designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application. We have carefully crafted each component to ensure that they are responsive, accessible and consistent across different devices and browsers"
    >
      <div className="min-h-[calc(100vh-100px)]">
        <HeroBlock />
        <ComponentBlock />
        <FeatureBlock />
      </div>
      <Footer />
    </Layout>
  );
}
