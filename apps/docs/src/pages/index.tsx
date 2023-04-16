import React from 'react';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroBlock from '@site/src/components/home/hero-block';
import FeatureBlock from '@site/src/components/home/feature-block';
// import ComponentBlock from '@site/src/components/home/component-block';
import Footer from '@site/src/components/home/footer';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description="🚀 Beautiful, fast and modern React UI library. Designed to integrate beautifully with Tailwind CSS. Rizz UI built with React, Tailwind CSS & Typescript."
		>
			<div className="min-h-[calc(100vh-100px)]">
				<HeroBlock />
				{/* <ComponentBlock /> */}
				<FeatureBlock />
			</div>
			<Footer />
		</Layout>
	);
}
